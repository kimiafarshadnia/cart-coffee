// Create Unique Id
export const uid = () => {
	return Date.now().toString(36) + Math.random().toString(36).substr(5);
};

// Return truthy classes
export const clx = (...classes: any[]) => {
	return classes.filter(Boolean).join(' ');
};