import { classnames } from '@/utils/functions';
import { Text } from '@bsf/force-ui';

const Layout = ( { className = 'w-[42rem]', children } ) => {
	return (
		<div
			className={ classnames(
				'box-border mx-auto p-8 mt-10 border-0.5 border-solid border-border-subtle bg-background-primary rounded-xl shadow-sm space-y-4 max-w-[90%]',
				className
			) }
			role="region"
			aria-labelledby="screen-title"
		>
			{ children }
		</div>
	);
};

Layout.Header = ( { title, description } ) => {
	return (
		<div className="space-y-1">
			<Text as="h2" id="screen-title" size={ 24 }>
				{ title }
			</Text>

			<Text as="p" size={ 14 } color="secondary">
				{ description }
			</Text>
		</div>
	);
};

export default Layout;
