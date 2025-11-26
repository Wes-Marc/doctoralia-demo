import { useState } from "react";
import { RichText } from '@hubspot/cms-components';
import IconCircleInfo from '../../assets/Icons/IconCircleInfo.jsx';
import styles from './tooltip.module.css';

export default function Tooltip({ text }) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleTooltip = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<div className={styles.tooltip}>
			<button
				className={styles.tooltip__trigger}
				onMouseEnter={toggleTooltip}
				onMouseLeave={toggleTooltip}
				onFocus={toggleTooltip}
				onBlur={toggleTooltip}
				aria-haspopup="true"
				aria-expanded={isOpen}
				aria-label="Show tooltip"
			>
				<IconCircleInfo fill='currentColor' height={14} />
			</button>

			{isOpen && (
				<div
					role="tooltip"
					className={styles.tooltip__content}
				>
					<RichText fieldPath={text} />
				</div>
			)}
		</div>
	);
}