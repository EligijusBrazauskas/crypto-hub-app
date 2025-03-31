import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createRequest } from "helpers";
import { GetNewsQueryParams, GetNewsQueryResponse } from "interfaces";

const headers: Record<string, string> = {
	"x-rapidapi-host": "news-api14.p.rapidapi.com",
	"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY ?? "",
};

export const defaultParams: GetNewsQueryParams = {
	params: { query: "cryptocurrency", language: "en", from: "1d" },
};

export const newsApi = createApi({
	reducerPath: "news",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://news-api14.p.rapidapi.com/v2",
	}),
	endpoints: (builder) => ({
		getNews: builder.query<GetNewsQueryResponse, GetNewsQueryParams | void>({
			query: (params = defaultParams) =>
				createRequest("/search/articles", headers, params?.params),
		}),
	}),
});

export const { useGetNewsQuery } = newsApi;
