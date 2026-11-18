import HeaderActionButtons from '../../reusable/header-action-buttons/header-action-buttons';
import Logo from '../../reusable/logo/logo';
import Tabs from '../../reusable/tabs/tabs';

const Header = () => {
	return (
		<div className="spectra-ai h-14 md:h-[4.5rem] w-full flex justify-between items-center bg-white border-0 border-b border-solid border-b-border-primary px-2.5 md:px-5">
			<Logo />
			<Tabs />
			<HeaderActionButtons />
		</div>
	);
};

export default Header;
