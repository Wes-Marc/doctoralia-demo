import { BooleanField, NumberField, RichTextField, TextField } from "@hubspot/cms-components/fields";
import ButtonFields from "../ButtonFields";

export default function PlanPriceFields() {
	const buttonFieldVisibility = {
		boolean_operator: 'OR',
		criteria: [{
			controlling_field_path: 'showButton',
			controlling_value_regex: 'true',
			operator: 'EQUAL'
		}]
	}

	return (
		<>
			<TextField
				label="Plan name"
				name="planName"
				default="Starter"
			/>
			<BooleanField
				label="Show previous price"
				name="showPrevious"
				id="showPrevious"
				display="toggle"
				default={true}
			/>
			<NumberField
				label="Price"
				name="planPrice"
				display="text"
				displayWidth="half_width"
				required={true}
				min={1}
				step={1}
				prefix="€"
				placeholder="34"
				default={34}
			/>
			<NumberField
				label="Previous price"
				name="previousPrice"
				display="text"
				displayWidth="half_width"
				visibility={{
					controlling_field: "showPrevious",
					controlling_value_regex: "true",
					operator: "EQUAL"
				}}
				min={1}
				step={1}
				prefix="€"
				placeholder="69"
				default={69}
			/>
			<BooleanField
				label="Add description"
				name="showDescription"
				id="showDescription"
				display="toggle"
				default={false}
			/>
			<RichTextField
				label="Description"
				name="description"
				visibility={{
					controlling_field: "showDescription",
					controlling_value_regex: "true",
					operator: "EQUAL"
				}}
				default='<p><span style="color:#006A59">Save 20% off</span> for the first 2 months</p>'
			/>
			<BooleanField
				label="Show Button"
				name="showButton"
				id="showButton"
				display="toggle"
				default={true}
			/>
			<ButtonFields
				textVisibility={buttonFieldVisibility}
				linkVisibility={buttonFieldVisibility}
				iconVisibility={buttonFieldVisibility}
			/>
		</>
	);
}