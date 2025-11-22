import { RichText } from '@hubspot/cms-components';
import { Button } from '../Button/index.jsx';
import styles from './plan-price.module.css';

export function PlanPrice({ fields }) {
	const {
		planName,
		showPrevious,
		planPrice,
		previousPrice,
		showDescription,
		description,
		showButton,
		buttonText,
		buttonLink,
		buttonShowIcon,
		buttonIcon,
		buttonIconPosition,
	} = fields;

	return (
		<div className="plan">
			<p className="plan__name">{planName}</p>
			<h6 className="plan__price">{`€${planPrice}`}</h6>
			{showPrevious && <p className="plan__previous_price">{`€${previousPrice}`}</p>}
			<div className="plan__description">
				<RichText className='plan__desc' fieldPath={`description`} />
			</div>
			{
				showButton &&
				<Button
					text={buttonText}
					link={buttonLink}
					buttonStyle=""
					buttonSize=""
					showIcon={buttonShowIcon}
					iconFieldPath={`buttonIcon`}
					iconPosition={buttonIconPosition}
				/>
			}
		</div>
	);
}