import { 
	BooleanField,
	ModuleFields,
	RepeatedFieldGroup,
	TextField
} from '@hubspot/cms-components/fields';
import SubscriptionFields from '../../fieldLibrary/SubscriptionPlanFields/index.jsx';
import ButtonFields from '../../fieldLibrary/ButtonFields/index.jsx';
import FeatureItemFields from '../../fieldLibrary/FeatureItemFields/index.jsx';

const buttonFieldVisibility = {
	boolean_operator: 'OR',
	criteria: [{
		controlling_field_path: 'plansGroup.showButton',
		controlling_value_regex: 'true',
		operator: 'EQUAL'
	}]
}

export const fields = (
	<ModuleFields>
		<TextField
			name='sectionTitle'
			label='Section title'
			default='Compare features from all our plans'
		/>
		<TextField
			label='Title'
			name="tableTitle"
			default='Compare plans'
		/>
		<BooleanField
			label="Add description"
			name="addDescription"
			default={true}
		/>
		<TextField
			label='Description'
			name='tableDescription'
			allowNewLine={true}
			default='All prices per month + IVA billed yearly'
		/>
		<RepeatedFieldGroup
			label='Plans'
			name='plansGroup'
			occurrence={{
				min: 1,
				max: 3,
				default: 1
			}}
			groupOccurrenceMeta={{
				featured_enabled: true,
				featured_limit: 2
			}}
			default={[
				{
					planName: "Example",
					showPrevious: true,
					planPrice: 1,
					previousPrice: 2,
					showDescription: true,
					description: '<p><span style="color:#006A59;font-weight:600">Save 20% off</span>for the first 2 months</p>',
					showButton: true,
					buttonText:"Learn more",
					buttonVariant:"primary",
					buttonSize:"small",
					buttonLink: {
						open_in_new_tab: true,
					},
					buttonShowIcon: false,
					buttonIcon: {
						name: "arrow-down",
					},
					buttonIconPosition:"right",
					fieldsVisibility: buttonFieldVisibility
				}
			]}
		>
			<SubscriptionFields
				planName="Starter"
				showPrevious={true}
				planPrice={1}
				previousPrice={2}
				showDescription={true}
				description='<p><span style="color:#006A59;font-weight:600">Save 20% off</span>for the first 2 months</p>'
				showButton={true}
			/>
			<ButtonFields
				buttonText="Learn more"
				buttonVariant="primary"
				buttonSize="small"
				buttonLink={{
					open_in_new_tab: true,
				}}
				buttonShowIcon={false}
				buttonIcon={{
					name: "arrow-down",
				}}
				buttonIconPosition="right"
				fieldsVisibility={buttonFieldVisibility}
			/>
		</RepeatedFieldGroup>
		<RepeatedFieldGroup
			label='Features'
			name='featuresGroup'
			occurrence={{
				min: 1,
				max: null,
				default: 1
			}}
			default={[
				{
					featureCategory: "Marketing",
					featureItems: [
						{
							featureName: "Marketing feature",
							showTooltip: true,
							tooltipText: '<p>Example tooltip text</p>',
							featuresData: {
								optionA: {
									planStarter: true,
									dataOptionA: "icon",
								},
								optionB: {
									planPlus: true,
									dataOptionB: "icon"
								},
								optionC: {
									planVIP: true,
									dataOptionC: "text",
									optionCText: "Enhanced"
								}
							}
						}
					]
				}
			]}
		>
			<FeatureItemFields
				featureCategory="Example Category"
				featureItems={{
					featureName: "Marketing",
					showTooltip: false,
					tooltipText: '<p>Example tooltip text</p>',
					featuresData: {
						optionA: {
							planStarter: true,
							dataOptionA: "icon",
						},
						optionB: {
							planPlus: true,
							dataOptionB: "icon"
						},
						optionC: {
							planVIP: true,
							dataOptionC: "text",
							optionCText: "Enhanced"
						}
					}
				}}
			/>
		</RepeatedFieldGroup>
	</ModuleFields>
);
