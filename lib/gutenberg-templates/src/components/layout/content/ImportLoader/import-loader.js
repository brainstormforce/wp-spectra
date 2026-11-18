import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { STORE_KEY } from '../../../../store';
import { ExclamationTriangleColorfulIcon, HourGlassIcon } from '../../../ui/icons';
import Button from '../../../reusable/button/button';
import { classNames } from '../../../../utils/helpers';

const { images } = ast_block_template_vars;

const ImportLoader = () => {
	const { importInProgress, notice } = useSelect( ( select ) => {
		const { getImportInProgress, getNotice } = select( STORE_KEY );
		return {
			importInProgress: getImportInProgress(),
			notice: getNotice(),
		};
	}, [] );
	const { setImportInProgress } = useDispatch( STORE_KEY );

	if ( ! importInProgress || ( notice?.type !== 'import-info' && notice?.type !== 'import-error' ) ) {
		return false;
	}

	return (
		<div
			className="absolute inset-x-0 top-[4.5rem] h-[calc(100%_-_4.5rem)] w-full"
			style={ {
				backgroundImage: `url('${ images }background.png')`,
			} }
		>
			<div className="absolute inset-0 backdrop-blur-md bg-[#F0F0FF]/[0.9]" />
			<div className="relative w-full h-full grid grid-cols-1 grid-rows-1 place-items-center z-[1]">
				<div className={ classNames(
					'h-auto w-full -mt-8 flex items-center justify-center flex-col rounded-lg py-7 px-10 border border-solid border-zip-light-border-primary shadow-xlarge bg-white',
					notice?.type === 'import-error' ? 'max-w-[27.375rem]' : 'max-w-xs'
				) }>
					{ notice?.type === 'import-error' ? <ExclamationTriangleColorfulIcon className="size-5" /> : <HourGlassIcon className="mx-auto text-accent-spectra animate-hour-glass" /> }
					<h6 className="mt-4 mb-1 text-center text-base font-medium text-zip-app-heading">{ notice?.type === 'import-error' ? notice?.title : __( 'Please wait a moment', 'ast-block-templates' ) }</h6>
					<p className="m-0 text-center text-sm font-normal text-slate-500" dangerouslySetInnerHTML={ { __html: notice.message } } />
					{
						notice?.type === 'import-error' && (
							<Button
								variant="primary"
								className="mt-6"
								onClick={ () => {
									setImportInProgress( false );
								} }
								isSmall
							>
								{ __( 'Back to Main Screen', 'ast-block-templates' ) }
							</Button>
						)
					}
				</div>
			</div>
		</div>
	);
};

export default ImportLoader;
