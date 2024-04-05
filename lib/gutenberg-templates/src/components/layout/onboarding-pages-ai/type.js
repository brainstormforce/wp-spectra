import { Fragment, useState } from '@wordpress/element';
import Header from './header';
import Input from '../../reusable/input/input';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Button from '../../reusable/button/button';
import { useDispatch } from '@wordpress/data';
import { STORE_KEY } from '../../../store';
import { classNames } from '../../../utils/helpers';

const pageCategoryTypes = [
	{ id: 1, name: 'Home' },
	{ id: 2, name: 'About' },
	{ id: 3, name: 'Services' },
	{ id: 4, name: 'Contact' },
	{ id: 5, name: 'Blog' },
	{ id: 6, name: 'Landing Page' },
	{ id: 7, name: 'Something Else' },
];

export const TypeItem = ( { type, selected, onClick, className } ) => {
	const { name, prefixIcon, suffixIcon } = type;

	const handleClick = ( item ) => ( event ) => {
		event?.preventDefault();
		event?.stopPropagation();
		if ( typeof onClick !== 'function' ) {
			return;
		}
		onClick( item );
	};

	return (
		<div
			onClick={ handleClick( type ) }
			className={ classNames(
				'flex items-center justify-center gap-2 py-3 font-medium hover:shadow-medium transition duration-150 ease-in-out cursor-pointer border border-solid rounded-full hover:border-accent-spectra',
				selected
					? 'text-heading-text border-accent-spectra shadow-medium bg-white'
					: 'text-body-text border-transparent bg-background-secondary',
				! prefixIcon && ! suffixIcon && 'px-8',
				prefixIcon && ! suffixIcon && 'pr-8 pl-6',
				! prefixIcon && suffixIcon && 'pl-8 pr-6',
				className
			) }
			aria-hidden="true"
		>
			{ !! prefixIcon && prefixIcon }
			<span>{ name }</span>
			{ !! suffixIcon && suffixIcon }
		</div>
	);
};

const Type = () => {
	const [ activePage, setActivePage ] = useState( 'Home' );
	const [ showInputField, setShowInputField ] = useState( false );
	const { setNextOnboardingPagesAIStep } = useDispatch( STORE_KEY );

	const handleSelect = ( selectedType ) => {
		setActivePage( selectedType.name );
		if ( selectedType.id === 7 ) {
			console.log( selectedType.id );
			setShowInputField( true );
		} else {
			setShowInputField( false );
		}
	};

	return (
		<Fragment>
			<Header />
			<div className="w-full max-w-container px-10 lg:px-16 xl:px-20 py-12 mx-auto pt-10">
				<h4 className="font-semibold text-[2rem] leading-10 text-[#0F172A] m-0">
					What kind of page are you building?
				</h4>
				<p className="leading-6 text-base text-[#475569]">
					Let's get started by choosing the page you're designing.
				</p>
				<div className="my-8 flex gap-4 flex-wrap">
					{ pageCategoryTypes.length > 0 && pageCategoryTypes?.map( ( type ) => (
						<TypeItem
							className="py-2 px-6 font-medium text-sm leading-[21px]"
							key={ type.id }
							type={ type }
							onClick={ () => handleSelect( type ) }
							selected={ activePage === type.name }
						/>
					) ) }
				</div>
				{ showInputField && (
					<div className="mb-8">
						<Input
							placeholder="Enter page name here"
							label="Give it a name"
						/>
					</div>
				) }

				<Button
					variant="primary"
					className="w-full rounded-md"
					onClick={ setNextOnboardingPagesAIStep }
					hasSuffixIcon
					isSmall
				>
					<span>Next</span>
					<ArrowRightIcon className="w-4 h-4" />
				</Button>
			</div>
		</Fragment>
	);
};

export default Type;
