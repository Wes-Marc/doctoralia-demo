import {
	BooleanField,
	ChoiceField,
	IconField,
	LinkField,
	TextField
} from "@hubspot/cms-components/fields";

export default function ButtonFields(props) {
	const {
		buttonText = "Learn more",
		buttonVariant = "primary",
		buttonSize = "small",
		buttonLink = {
			open_in_new_tab: true,
		},
		buttonShowIcon = false,
		buttonIcon = {
			name: 'arrow-down',
		},
		buttonIconPosition = 'right',
		fieldsVisibility = null
	} = props;

	return (
		<>
			<TextField
				label="Button text"
				name="buttonText"
				visibilityRules="ADVANCED"
				advancedVisibility={fieldsVisibility}
				default={buttonText}
			/>
			<ChoiceField
				label="Button style"
				name="buttonVariant"
				display="select"
				displayWidth="half_width"
				visibilityRules="ADVANCED"
				advancedVisibility={fieldsVisibility}
				choices={[
					['primary', 'Primary'],
					['secondary', 'Secondary']
				]}
				required={true}
				default={buttonVariant}
			/>
			<ChoiceField
				label="Button size"
				name="buttonSize"
				display="select"
				displayWidth="half_width"
				visibilityRules="ADVANCED"
				advancedVisibility={fieldsVisibility}
				choices={[
					['small', 'Small'],
					['large', 'Large']
				]}
				required={true}
				default={buttonSize}
			/>
			<LinkField
				label="Link"
				name="buttonLink"
				visibilityRules="ADVANCED"
				advancedVisibility={fieldsVisibility}
				supportedTypes={[
					'EXTERNAL',
					"CONTENT",
					"FILE",
					"EMAIL_ADDRESS",
					"BLOG"
				]}
				default={buttonLink}
			/>
			<BooleanField 
				label="Show icon"
				name="buttonShowIcon"
				id="buttonShowIcon"
				display="toggle"
				visibilityRules="ADVANCED"
				advancedVisibility={fieldsVisibility}
				default={buttonShowIcon}
			/>
			<IconField
				label="Icon"
				name="buttonIcon"
				id="buttonIcon"
				visibility={{
					controlling_field: 'buttonShowIcon',
					controlling_value_regex: 'true',
					operator: 'EQUAL'
				}}
				iconSet="fontawesome-6.4.2"
				default={buttonIcon}
			/>
			<ChoiceField
				label="Icon position"
				name="buttonIconPosition"
				visibility={{
					controlling_field: "buttonShowIcon",
					controlling_value_regex: "true",
					operator: "EQUAL"
				}}
				choices={[
					['left', 'Left'],
					['right', 'Right']
				]}
				required={true}
				display="select"
				default={buttonIconPosition}
			/>
		</>
	);
}