const {
	productId,
	userInfo: { firstName, lastName, email } = {},
	proStatus,
} = window.oneOnboardingData || {};

// Initial state
export const initialState = {
	productId,
	screens: [],
	currentScreen: 'welcome',
	userInfo: {
		firstName: firstName || '',
		lastName: lastName || '',
		email: email || '',
		source: null,
		benefit: null,
		newUser: null,
		optIn: true,
	},
	proFeatures: [],
	proStatus: proStatus || 'not-installed',
	selectedAddons: [],
	activatedAddons: [],
	starterTemplatesBuilder: null,
};
