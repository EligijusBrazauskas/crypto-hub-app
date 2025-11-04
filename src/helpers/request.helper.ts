import { Params } from "react-router-dom";

export const createRequest = (
	url: string,
	headers: Record<string, string>,
	params?: Params,
) => ({
	url,
	headers,
	params,
});
