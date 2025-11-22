import {
	BooleanField,
	ChoiceField,
	IconField,
	LinkField,
	TextField
} from "@hubspot/cms-components/fields";

export default function ButtonFields(props) {
	const {
		textVisibility = null,
		linkVisibility = null,
		iconVisibility = null,
	} = props;

	return (
		<>
			<TextField
				label="Button text"
				name="buttonText"
				visibilityRules="ADVANCED"
				advancedVisibility={textVisibility}
				default="Learn more"
			/>
			<LinkField
				label="Link"
				name="buttonLink"
				visibilityRules="ADVANCED"
				advancedVisibility={linkVisibility}
				supportedTypes={[
					'EXTERNAL',
					"CONTENT",
					"FILE",
					"EMAIL_ADDRESS",
					"BLOG"
				]}
				default={{
					url: {
						content_id: null,
						type: "EXTERNAL",
						href: ""
					},
					open_in_new_tab: true,
					no_follow: false
				}}
			/>
			<BooleanField 
				label="Show icon"
				name="buttonShowIcon"
				id="buttonShowIcon"
				visibilityRules="ADVANCED"
				advancedVisibility={iconVisibility}
				display="toggle"
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
				default={{
					name: 'arrow-down',
				}}
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
				default={"right"}
			/>
		</>
	);
}