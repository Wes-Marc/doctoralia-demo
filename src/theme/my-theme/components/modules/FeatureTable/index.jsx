import styles from './feature-table.module.css';
import { SubscriptionPlan } from '../../SubscriptionPlan/index.jsx';
import { Button } from '../../Button/index.jsx';
import { FeatureItem } from '../../FeatureItem/index.jsx';

export function Component(fieldValues) {
	const {
		sectionTitle,
		tableTitle,
		addDescription,
		tableDescription,
		plansGroup,
		featuresGroup,
		hublData
	} = fieldValues;

	return (
		<section className="feature_table">
			<div className="content_wrapper">
				<div className={`${styles.feature_table__section_title_wrapper} text_center`}>
					{
						sectionTitle &&
						<h3 className={styles.feature_table__section_title}>
							{sectionTitle}
						</h3>
					}
				</div>
				<table>
					<colgroup>
						<col />
						{
							plansGroup.map((plan, index) => (
								<col 
									key={index}
									className={`${hublData?.featuredPlans.includes(plan.planName) ? "bg_highlight" : ''}`}
								/>
							))
						}
					</colgroup>
					<thead>
						<tr>
							<th scope='row'>
								{
									tableTitle &&
									<h5 className={styles.feature_table__title}>
										{tableTitle}
									</h5>
								}
								{
									addDescription &&
									<p className={styles.feature_table__description}>
										{tableDescription}
									</p>
								}
							</th>
							{plansGroup.map((plan, index) => (
								<th
									key={index}
									scope='col'
									className={`${hublData?.featuredPlans.includes(plan.planName) ? styles.plan_highlight__support : ''}`}
								>
									<div className={`${styles.plan} round_top ${hublData?.featuredPlans.includes(plan.planName) ? "bg_highlight" : ""}`}>
										<SubscriptionPlan
											planName={plan.planName}
											showPrevious={plan.showPrevious}
											planPrice={plan.planPrice}
											previousPrice={plan.previousPrice}
											showDescription={plan.showDescription}
											description={`plansGroup[${index}].description`}
											showButton={plan.showButton}
										/>
										{
											plan.showButton &&
											<div className={styles.plan__cta}>
												<Button
													buttonText={plan.buttonText}
													buttonVariant={plan.buttonVariant}
													buttonSize={plan.buttonSize}
													buttonLink={plan.buttonLink}
													buttonShowIcon={plan.buttonShowIcon}
													buttonIcon={`plansGroup[${index}].buttonIcon`}
													buttonIconPosition={plan.buttonIconPosition}
												/>
											</div>
										}
									</div>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{
							featuresGroup.map((feature, index) => (
								<FeatureItem
									key={index}
									planAmount={plansGroup}
									featureCategory={feature.featureCategory}
									featureItems={feature.featureItems}
								/>
							))
						}
					</tbody>
				</table>
			</div>
		</section>
	);
}

export { fields } from './fields.jsx';

export const hublDataTemplate = `
	{% set plansToHighlight = [] %}
	{% for item in module.plansGroup %}
		{% if item.hs_meta.occurrence.featured %}
			{% do plansToHighlight.append(item.planName) %}
		{% endif %}
	{% endfor %}
	{% set hublData = {
			"featuredPlans": plansToHighlight
		}
	%}
`;

export const meta = {
	label: "Features Table"
}