import { 
	FieldGroup,
	ModuleFields,
	RepeatedFieldGroup,
	TextField
} from '@hubspot/cms-components/fields';
import SubscriptionFields from '../../fieldLibrary/SubscriptionPlanFields/index.jsx';
import ButtonFields from '../../fieldLibrary/ButtonFields/index.jsx';

const buttonFieldVisibility = {
	boolean_operator: 'OR',
	criteria: [{
		controlling_field_path: 'plansGroup.plan.showButton',
		controlling_value_regex: 'true',
		operator: 'EQUAL'
	}]
}

export const fields = (
	<ModuleFields>
		<TextField name='title' label='Title' default='Compare features from all our plans' />
		<FieldGroup
			label='Plans'
			name='plansGroup'
			display='inline'
		>
			<RepeatedFieldGroup
				label='Plan'
				name='plan'
				occurrence={{
					min: 1,
					max: 3,
					default: 1
				}}
			>
				<SubscriptionFields
					nameDefault="Example"
					priceDefault={1}
					previousPriceDefault={2}
					descriptionDefault='<p><span style="color:#006A59;font-weight:600">Save 20% off</span> for the first 2 months</p>'
				/>
				<ButtonFields
					textDefault='Example'
					styleVariantDefault="primary"
					sizeDefault="small"
					linkDefault={{
						open_in_new_tab: true,
					}}
					iconPositionDefault="right"
					fieldsVisibility={buttonFieldVisibility}
				/>
			</RepeatedFieldGroup>
		</FieldGroup>
	</ModuleFields>
);
