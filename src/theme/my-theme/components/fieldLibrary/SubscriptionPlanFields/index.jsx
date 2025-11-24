import {
	BooleanField,
	NumberField,
	RichTextField,
	TextField
} from "@hubspot/cms-components/fields";

export default function SubscriptionFields(props) {
	const {
		nameDefault = "Starter",
		priceDefault = 1,
		previousPriceDefault = 2,
		descriptionDefault = '<p><span style="color:#006A59;font-weight:600">Save 20% off</span>for the first 2 months</p>',
	} = props;

	return (
		<>
			<TextField
				label="Plan name"
				name="planName"
				default={nameDefault}
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
				default={priceDefault}
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
				default={previousPriceDefault}
			/>
			<BooleanField
				label="Add description"
				name="showDescription"
				id="showDescription"
				display="toggle"
				default={true}
			/>
			<RichTextField
				label="Description"
				name="description"
				visibility={{
					controlling_field: "showDescription",
					controlling_value_regex: "true",
					operator: "EQUAL"
				}}
				default={descriptionDefault}
			/>
			<BooleanField
				label="Show Button"
				name="showButton"
				id="showButton"
				display="toggle"
				default={true}
			/>
		</>
	);
}