import { Icon } from '@hubspot/cms-components';
import styles from './button.module.css';
import { getLinkHref, getLinkRel } from '../utils/link-fields.js';

export function Button(fields) {
	const {
		text,
		link,
		buttonStyle,
		buttonSize,
		showIcon,
		iconFieldPath,
		iconPosition
	} = fields;

	return (
		<a
			className={`${styles.button}`}
			href={getLinkHref(link)}
			rel={getLinkRel(link)}
			target={link.open_in_new_tab ? "_blank" : ""}
		>
			{text}
			{iconFieldPath && showIcon && <Icon className={styles.button__icon} fieldPath={iconFieldPath} purpose='DECORATIVE' />}
		</a>
	);
}