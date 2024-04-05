import HeaderActionButtons from '../../reusable/header-action-buttons/header-action-buttons';
import Logo from '../../reusable/logo/logo';
import Tabs from '../../reusable/tabs/tabs';

const Header = () => {
	return (
		<div className="spectra-ai h-[4.5rem] w-full grid grid-cols-3 grid-rows-1 items-center bg-white border-0 border-b border-solid border-b-border-primary px-5">
			<Logo />
			<Tabs />
			<HeaderActionButtons />
		</div>
	);
};

export default Header;
