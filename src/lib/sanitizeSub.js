export function sanitizeSub(sub) {
	if(!sub) return '';
	return sub.trim().replaceAll(/\W/g, '')
}