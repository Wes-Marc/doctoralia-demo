export function getLinkHref(linkField) {
	if(!linkField || !linkField.url) return;

	const linkHref = linkField.url.href;
	const linkType = linkField.url.type;

	const hrefMap = {
		"EMAIL_ADDRESS": `mailto:${linkHref}`
	}

	return hrefMap[linkType] || linkHref;
}

export function getLinkRel(linkField) {
	const relValues = [];

	if (linkField.open_in_new_tab) {
		relValues.push('noopener', 'noreferrer');
	}
	if (linkField.no_follow) {
		relValues.push('nofollow');
	}

	return relValues.join(' ');
}

export function getLinkTarget(linkField) {
	if (!linkField) return '';

	return linkField.open_in_new_tab ? '_blank' : '';
}