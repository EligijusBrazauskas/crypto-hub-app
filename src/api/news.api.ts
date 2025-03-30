import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createRequest } from "helpers";

const headers: Record<string, string> = {
	"x-rapidapi-host": "news-api14.p.rapidapi.com",
	"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY ?? "",
};

const newsSearchUrlParams = (category: string, count: number) => {
	return `/search/articles?query=${category}&language=en`;
};

export const newsApi = createApi({
	reducerPath: "newsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://news-api14.p.rapidapi.com/v2",
	}),
	endpoints: (builder) => ({
		getNews: builder.query<any, any>({
			query: ({ category, count }) =>
				createRequest(newsSearchUrlParams(category, count), headers),
		}),
	}),
});

export const { useGetNewsQuery } = newsApi;
