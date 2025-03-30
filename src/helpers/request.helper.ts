export const createRequest = (
	url: string,
	headers: Record<string, string>,
) => ({
	url,
	headers,
});
