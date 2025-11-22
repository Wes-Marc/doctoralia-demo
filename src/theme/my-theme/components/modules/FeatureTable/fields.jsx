import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import { PlanPriceFields } from '../../fieldLibrary/index.js';

export const fields = (
	<ModuleFields>
		<TextField name='title' label='Title' default='Compare features from all our plans' />
		<PlanPriceFields />
	</ModuleFields>
);
