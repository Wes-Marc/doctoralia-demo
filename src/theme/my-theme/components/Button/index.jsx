import { Icon } from '@hubspot/cms-components';
import { getLinkHref, getLinkRel, getLinkTarget } from '../utils/link-fields.js';

function getButtonStyleVariant(buttonVariant) {
	const options = {
		primary: 'button--primary',
		secondary: 'button--secondary'
	}

	return options[buttonVariant];
}

function getButtonStyleSize(buttonSize) {
	const sizes = {
		small: 'button--small',
		large: 'button--large'
	}

	return sizes[buttonSize];
}

function getButtonIconPosition(position) {
	const iconPositions = {
		right: 'button--icon_right',
		left: 'button--icon_left'
	};

	return iconPositions[position];
}

export function Button(moduleFields) {
	const {
		buttonText,
		buttonVariant,
		buttonSize,
		buttonLink,
		buttonShowIcon,
		buttonIcon,
		buttonIconPosition
	} = moduleFields;

	const buttonStyleVariant = getButtonStyleVariant(buttonVariant);
	const buttonStyleSize = getButtonStyleSize(buttonSize);
	const iconPosition = getButtonIconPosition(buttonIconPosition);

	return (
		<a
			className={`button ${buttonStyleVariant} ${buttonStyleSize} ${iconPosition}`}
			href={getLinkHref(buttonLink)}
			rel={getLinkRel(buttonLink)}
			target={getLinkTarget(buttonLink)}
		>
			{buttonText}
			{
				buttonIcon && buttonShowIcon && 
				<Icon
					fieldPath={buttonIcon}
					purpose='DECORATIVE'
					height={16}
				/>
			}
		</a>
	);
}