import styles from './feature-table.module.css';
import { SubscriptionPlan } from '../../SubscriptionPlan/index.jsx';
import { Button } from '../../Button/index.jsx';

export function Component({ fieldValues }) {
	const {
		title,
		plansGroup
	} = fieldValues;

	return (
		<section className="feature_table">
			<div className="content_wrapper">
				<div className={`${styles.feature_table__title_wrapper} text_center`}>
					<h3 className={styles.feature_table__title}>
						{title}
					</h3>
				</div>
				<table>
					<thead>
						<tr>
							<th>
								<h5>Compare plans</h5>
								<p>All prices per month + IVA billed yearly</p>
							</th>
							{plansGroup.plan.map((plan, index) => (
								<th key={index}>
									<div className={styles.plan}>
										<SubscriptionPlan
											planName={plan.planName}
											showPrevious={plan.showPrevious}
											planPrice={plan.planPrice}
											previousPrice={plan.previousPrice}
											showDescription={plan.showDescription}
											description={`plansGroup.plan[${index}].description`}
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
													buttonIcon={`plansGroup.plan[${index}].buttonIcon`}
													buttonIconPosition={plan.buttonIconPosition}
												/>
											</div>
										}
									</div>
								</th>
							))}
						</tr>
					</thead>
				</table>
			</div>
		</section>
	);
}

export { fields } from './fields.jsx';

export const meta = {
	label: "Features Table"
}