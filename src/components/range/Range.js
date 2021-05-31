import './range.scss';
import { Component } from '@wordpress/element';
import { Button, Dashicon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

class Range extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '',
        };
        this.onChangeSize = this.onChangeSize.bind( this );
    }

    onChangeSize( value ) {
        this.setSettings( { value: '0' } );
    }

    _filterValue(type) {
        const { value } = this.props
        if (type == 'unit') {
            return value ? (value.unit || 'px') : 'px'
        } else {
            return value
        }
    }

    setSettings(val, type) {

        const {
            min,
            max,
            unit,
            value,
            onChange, 
        } = this.props;

        let newValue = {};

        if (typeof value === 'object' && Object.keys(value).length > 0) {
            newValue = JSON.parse(JSON.stringify(value));
        }

        if (unit && !newValue.hasOwnProperty('unit')) {
            newValue.unit = 'px';
        }

        if ( type === 'unit' ) {
            newValue.unit = val;
        } else {
            newValue = val;
            newValue = min ? (newValue < min ? min : newValue) : (newValue < 0 ? 0 : newValue);
            newValue = max ? (newValue > max ? max : newValue) : (newValue > 1000 ? 1000 : newValue);
        }
        onChange(newValue);
        this.setState({ current: newValue });
    }

    _minMax(type) {
        let unit = this._filterValue('unit')
        return (this.props[type] && this.props[type] != 0) ? (unit == 'em' ? Math.round(this.props[type] / 16) : this.props[type]) : 0
    }

    _steps() {
        let unit = this._filterValue('unit')
        return unit == 'em' ? .001 : (this.props.step || 1)
    }

    render() {
        const { unit, 
            label = __( 'Margin', 'ultimate-addons-for-gutenberg' ),
            disabled = false,
            type = 'margin',
         } = this.props
    
        return (
            <div className={'uagb-field-range uagb-field '}>
               {(label || unit ) &&
                    <div className="uagb-d-flex uagb-align-center uagb-mb-10">
                        {unit &&
                            <div className="uagb-unit-btn-group uagb-ml-auto">
                                {(typeof unit == 'object' ? unit : ['px', 'em', '%']).map((value) => (
                                    <button className={(this.props.value && value == this.props.value.unit) ? 'active' : ''}
                                        onClick={() => {
                                            this.setSettings(value, 'unit');
                                        }}
                                    >
                                        {value}
                                    </button>
                                ))}
                            </div>
                        }
                    </div>
                }
                <div className="components-uagb-dimensions-control__header">
                {label &&
                 <p className={ 'components-uagb-dimensions-control__label' }>{ __( label, 'ultimate-addons-for-gutenberg' ) }</p>
                }
                { !isNaN(this.props.value) && (
                    <Button
                        className="uagb-spacing-reset"
                        type="button"
                        onClick={ () => this.onChangeSize('no') }
                        isSmall
                        isSecondary
                    >
                        <Dashicon icon="image-rotate" />
                    </Button>
                     )
                }
                </div>
                <div className="uagb-field-child">
                    <div className="uagb-input-range">
                        <input
                            type="range"
                            min={this._minMax('min')}
                            max={this._minMax('max')}
                            value={this._filterValue()}
                            step={this._steps()}
                            disabled={disabled}
                            onChange={e => this.setSettings(this._filterValue() == e.target.value ? '' : e.target.value, 'range')}
                        />
                        <input
                            type="number"
                            step={this._steps()}
                            onChange={v => this.setSettings(v.target.value, 'range')}
                            value={this._filterValue() + (this.props.suffix ? this.props.suffix : '')}
                            disabled={disabled}
                            {...(this.props.suffix && { disabled: true })}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default Range