/**
 * BLOCK: Container - Deprecated Block
 */

import attributesV2_4_2 from './deprecated/v2_4_2/attributes';
import attributes from './attributes';
import saveV2_4_2 from './deprecated/v2_4_2/save';
import saveV2_5_1 from './deprecated/v2_5_1/save';

const deprecated = [
	{
		// Deprecated for v2.5.1
		attributes: attributes,
		save: saveV2_5_1,
	},
	{
		// Deprecated for v2.4.2
		attributes: attributesV2_4_2,
		save: saveV2_4_2,
	},
];

export default deprecated;
