import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createRequest } from "helpers";

const headers: Record<string, string> = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY ?? "",
};

export const currenciesApi = createApi({
	reducerPath: "currenciesApi",
	baseQuery: fetchBaseQuery({ baseUrl: "https://coinranking1.p.rapidapi.com" }),
	endpoints: (builder) => ({
		getCurrencies: builder.query<any, any>({
			query: (count) => createRequest(`/coins?limit=${count}`, headers),
		}),
		getCurrency: builder.query<any, any>({
			query: (coinId) => createRequest(`/coin/${coinId}`, headers),
		}),
	}),
});

export const { useGetCurrenciesQuery, useGetCurrencyQuery } = currenciesApi;
