import {
	BooleanField,
	NumberField,
	RichTextField,
	TextField
} from "@hubspot/cms-components/fields";

export default function SubscriptionFields(props) {
	const {
		planName = "Starter",
		showPrevious = true,
		planPrice = 1,
		previousPrice = 2,
		showDescription = true,
		description = '<p><span style="color:#006A59;font-weight:600">Save 20% off</span>for the first 2 months</p>',
		showButton = true
	} = props;

	return (
		<>
			<TextField
				label="Plan name"
				name="planName"
				default={planName}
			/>
			<BooleanField
				label="Show previous price"
				name="showPrevious"
				id="showPrevious"
				display="toggle"
				default={showPrevious}
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
				default={planPrice}
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
				default={previousPrice}
			/>
			<BooleanField
				label="Add description"
				name="showDescription"
				id="showDescription"
				display="toggle"
				default={showDescription}
			/>
			<RichTextField
				label="Description"
				name="description"
				visibility={{
					controlling_field: "showDescription",
					controlling_value_regex: "true",
					operator: "EQUAL"
				}}
				default={description}
			/>
			<BooleanField
				label="Show Button"
				name="showButton"
				id="showButton"
				display="toggle"
				default={showButton}
			/>
		</>
	);
}