import { RichText } from '@hubspot/cms-components';
import styles from './subscriptions.module.css';

export function SubscriptionPlan(moduleFields) {
	const {
		planName,
		showPrevious,
		planPrice,
		previousPrice,
		showDescription,
		description,
		showButton,
	} = moduleFields;

	return (
		<div className={styles.subscription}>
			<p className={styles.subscription__name}>{planName}</p>
			<div className={styles.subscription__content}>
				<h6 className={styles.subscription__price}>{`€${planPrice}`}</h6>
				{showPrevious && <p className={styles.subscription__previous_price}>{`€${previousPrice}`}</p>}
			</div>
			{ showDescription && <RichText className={styles.subscription__description} fieldPath={description} /> }
		</div>
	);
}