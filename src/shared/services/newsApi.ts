import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsHeaders = {
	"x-rapidapi-host": "news-api14.p.rapidapi.com",
	"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
};

const baseUrl = "https://news-api14.p.rapidapi.com/v2";

const newsSearchUrlParams = (category: string, count: number) => {
	return `/search/articles?query=${category}&language=en`;
};

const createRequest = (url: string) => ({ url, headers: newsHeaders });

export const newsApi = createApi({
	reducerPath: "newsApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getNews: builder.query<any, any>({
			query: ({ category, count }) =>
				createRequest(newsSearchUrlParams(category, count)),
		}),
	}),
});

export const { useGetNewsQuery } = newsApi;
