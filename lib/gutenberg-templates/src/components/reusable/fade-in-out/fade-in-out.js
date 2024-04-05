import { memo, useMemo } from '@wordpress/element';
import { usePresence, motion } from 'framer-motion';

const FadeInOut = ( { children, ...props } ) => {
	const [ isPresent, safeToRemove ] = usePresence();
	const animations = useMemo( () => (
		{
			layout: true,
			initial: 'out',
			style: {
			  position: isPresent ? 'static' : 'absolute',
			},
			animate: isPresent ? 'in' : 'out',
			variants: {
			  in: { opacity: 1 },
			  out: { opacity: 0 },
			},
			onAnimationComplete: () => ! isPresent && safeToRemove(),
		  }
	), [ isPresent ] );

	return (
		<motion.div
			{ ...props }
			{ ...animations }
		>
			{ children }
		</motion.div>
	);
};

export default memo( FadeInOut );
