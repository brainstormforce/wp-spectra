/**
 * BLOCK: Container - Deprecated Block
 */

import attributesV2_4_2 from './deprecated/v2_4_2/attributes';
import saveV2_4_2 from './deprecated/v2_4_2/save';
import saveV2_5_1 from './deprecated/v2_5_1/save';
import saveV2_12_6 from './deprecated/v2_12_6/save';
import attributesV2_12_6 from './deprecated/v2_12_6/attributes';
import saveV2_15_3 from './deprecated/v2_15_3/save';
import attributesV2_15_3 from './deprecated/v2_15_3/attributes';

const deprecated = [
	{
		// Deprecated for v2.5.1
		attributes: attributesV2_12_6,
		save: saveV2_5_1,
	},
	{
		// Deprecated for v2.4.2
		attributes: attributesV2_4_2,
		save: saveV2_4_2,
	},
	{
		attributes: attributesV2_12_6,
		save: saveV2_12_6,
	},
	{
		attributes: attributesV2_15_3,
		save: saveV2_15_3,
	},
];

export default deprecated;
