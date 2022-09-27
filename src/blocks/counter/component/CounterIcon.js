import renderSVG from '@Controls/renderIcon';

const CounterIcon = ( props ) => {

    const { attributes } = props;

    return (
        <span className='wp-block-uagb-counter__icon'>
            {renderSVG( attributes.icon )}
        </span>
    );
};

export default CounterIcon;
