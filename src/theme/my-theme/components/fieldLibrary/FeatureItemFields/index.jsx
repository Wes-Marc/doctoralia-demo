import { BooleanField, ChoiceField, FieldGroup, RepeatedFieldGroup, RichTextField, TextField } from "@hubspot/cms-components/fields";


export default function FeatureItemFields(props) {
	const {
		featureCategory = "Example Catefory",
		tooltipText = '<p>Example tooltip text</p>',
		planStarter = false,
		dataOptionA = "icon",
		optionAText = "Example text",
		planPlus = false,
		dataOptionB = "icon",
		optionBText = "Example text",
		planVIP = false,
		dataOptionC = "icon",
		optionCText = "Example text"
	} = props;

	return (
		<>
			<TextField
				label="Category"
				name="featureCategory"
				default={featureCategory}
			/>
			<RepeatedFieldGroup
				label="Feature"
				name="featureItems"
				occurrence={{
					min: 1,
					max: null,
					default: 1
				}}
				default={[
					{
						featureName: "Marketing",
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
				]}
			>
				<TextField
					label="Name"
					name="featureName"
					allowNewLine={true}
					default="Example name"
				/>
				<BooleanField
					label="Add tooltip"
					name="showTooltip"
					id="showTooltip"
					display="toggle"
					default={false}
				/>
				<RichTextField
					label="Tooltip text"
					name="tooltipText"
					visibility={{
						controlling_field: "showTooltip",
						controlling_value_regex: 'true',
						operator: "EQUAL"
					}}
					default={tooltipText}
				/>
				<FieldGroup
					label="Included in:"
					name="featuresData"
					display="inline"
				>
					<FieldGroup
						label=" "
						name="optionA"
						display="inline"
					>
						<BooleanField
							label="Starter"
							name="planStarter"
							id="planStarter"
							displayWidth="half_width"
							default={planStarter}
						/>
						<ChoiceField
							label="Option"
							name="dataOptionA"
							id="dataOptionA"
							display="select"
							displayWidth="half_width"
							choices={[
								['icon', 'Icon'],
								['text', 'Text']
							]}
							required={true}
							visibility={{
								controlling_field: "planStarter",
								controlling_value_regex: "true",
								operator: "EQUAL"
							}}
							default={dataOptionA}
						/>
						<TextField
							label="Text"
							name="optionAText"
							visibilityRules="ADVANCED"
							advancedVisibility={{
								boolean_operator: "AND",
								criteria: [{
									controlling_field: "planStarter",
									controlling_value_regex: "true",
									operator: "EQUAL"
								},{
									controlling_field: "dataOptionA",
									controlling_value_regex: "text",
									operator: "EQUAL"
								}]
							}}
							default={optionAText}
						/>
					</FieldGroup>
					<FieldGroup
						label=" "
						name="optionB"
						display="inline"
					>
						<BooleanField
							label="Plus"
							name="planPlus"
							id="planPlus"
							displayWidth="half_width"
							default={planPlus}
						/>
						<ChoiceField
							label="Option"
							name="dataOptionB"
							id="dataOptionB"
							displayWidth="half_width"
							choices={[
								['icon', 'Icon'],
								['text', 'Text']
							]}
							required={true}
							visibility={{
								controlling_field: "planPlus",
								controlling_value_regex: "true",
								operator: "EQUAL"
							}}
							default={dataOptionB}
						/>
						<TextField
							label="Text"
							name="optionBText"
							visibilityRules="ADVANCED"
							advancedVisibility={{
								boolean_operator: "AND",
								criteria: [{
									controlling_field: "planPlus",
									controlling_value_regex: "true",
									operator: "EQUAL"
								},{
									controlling_field: "dataOptionB",
									controlling_value_regex: "text",
									operator: "EQUAL"
								}]
							}}
							default={optionBText}
						/>
					</FieldGroup>
					<FieldGroup
						label=" "
						name="optionC"
						display="inline"
					>
						<BooleanField
							label="VIP"
							name="planVIP"
							id="planVIP"
							displayWidth="half_width"
							default={planVIP}
						/>
						<ChoiceField
							label="Option"
							name="dataOptionC"
							id="dataOptionC"
							displayWidth="half_width"
							choices={[
								['icon', 'Icon'],
								['text', 'Text']
							]}
							required={true}
							visibility={{
								controlling_field: "planVIP",
								controlling_value_regex: "true",
								operator: "EQUAL"
							}}
							default={dataOptionC}
						/>
						<TextField
							label="Text"
							name="optionCText"
							visibilityRules="ADVANCED"
							advancedVisibility={{
								boolean_operator: "AND",
								criteria: [{
									controlling_field: "planVIP",
									controlling_value_regex: "true",
									operator: "EQUAL"
								},{
									controlling_field: "dataOptionC",
									controlling_value_regex: "text",
									operator: "EQUAL"
								}]
							}}
							default={optionCText}
						/>
					</FieldGroup>
				</FieldGroup>
			</RepeatedFieldGroup>
		</>
	);
}