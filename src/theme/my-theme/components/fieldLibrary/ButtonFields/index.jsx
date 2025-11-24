import {
	BooleanField,
	ChoiceField,
	IconField,
	LinkField,
	TextField
} from "@hubspot/cms-components/fields";

export default function ButtonFields(props) {
	const {
		textDefault = 'Learn more',
		styleVariantDefault = "primary",
		sizeDefault = "small",
		linkDefault = {
			open_in_new_tab: true,
		},
		iconDefault = {
			name: 'arrow-down',
		},
		iconPositionDefault = 'right',
		fieldsVisibility = null
	} = props;

	return (
		<>
			<TextField
				label="Button text"
				name="buttonText"
				visibilityRules="ADVANCED"
				advancedVisibility={fieldsVisibility}
				default={textDefault}
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
				default={styleVariantDefault}
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
				default={sizeDefault}
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
				default={linkDefault}
			/>
			<BooleanField 
				label="Show icon"
				name="buttonShowIcon"
				id="buttonShowIcon"
				display="toggle"
				visibilityRules="ADVANCED"
				advancedVisibility={fieldsVisibility}
				default={false}
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
				default={iconDefault}
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
				display="select"
				default={iconPositionDefault}
			/>
		</>
	);
}