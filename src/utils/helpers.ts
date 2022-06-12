export const isNullProperties = (obj: Record<string, unknown>): boolean => {
	for (const key in obj) {
		if (obj[key] !== null && obj[key] !== '') return false;
	}
	return true;
};

export const formatReadable = (value: string): string => value.replace(/([A-Z])/g, ' $1');

export const formatValidatorKey = (value: string): string => {
	const val = formatReadable(value).trim();
	return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
};
