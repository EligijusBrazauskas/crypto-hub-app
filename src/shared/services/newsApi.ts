import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const newsHeaders = {
	'x-bingapis-sdk': 'true',
	'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
	'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const newsSearchUrlParams = (category: string, count: number) => {
	return `/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`;
};

const createRequest = (url: string) => ({ url, headers: newsHeaders });

export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getNews: builder.query<any, any>({
			query: ({ category, count }) =>
				createRequest(newsSearchUrlParams(category, count))
		})
	})
});

export const { useGetNewsQuery } = newsApi;
