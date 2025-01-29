import { User, Settings, LayoutTemplate, PackageCheck, GitCompare, Zap, Eye, Blocks, Type } from 'lucide-react';

const SettingsIcons = {
    'asset-generation' : (
        <PackageCheck />
    ),
    'templates' : (
        <LayoutTemplate />
    ),
    'version-control' : (
        <GitCompare />
    ),
    'fonts-performance' : (
        <Zap />
    ),
    'global-settings' : (
        <Settings />
    ),
	'block-settings' : (
		<Blocks />
    ),
	'site-visibility' : (
		<Eye />
	),
    'account' : (
        <User />
    ),
    'font' : (
        <Type />
    )
};

export default SettingsIcons;
