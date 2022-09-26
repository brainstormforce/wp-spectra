import renderSVG from '@Controls/renderIcon';

const CounterIcon = ( props ) => {

    const { attributes } = props;

    return (
        <div className='wp-block-uagb-counter__icon'>
            {renderSVG( attributes.icon )}
        </div>
    );
};

export default CounterIcon;
