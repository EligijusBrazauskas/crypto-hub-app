import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createRequest } from "helpers";
import { GetCurrenciesQuery, GetCurrencyQuery } from "interfaces";
import { Params } from "react-router-dom";

const headers: Record<string, string> = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY ?? "",
};

export const currenciesApi = createApi({
	reducerPath: "currencies",
	baseQuery: fetchBaseQuery({ baseUrl: "https://coinranking1.p.rapidapi.com" }),
	endpoints: (builder) => ({
		getCurrencies: builder.query<QueryReturnValue<GetCurrenciesQuery>, Params>({
			query: (params) => createRequest("/coins", headers, params),
		}),
		getCurrency: builder.query<QueryReturnValue<GetCurrencyQuery>, string>({
			query: (coinId) => createRequest(`/coin/${coinId}`, headers),
		}),
	}),
});

export const { useGetCurrenciesQuery, useGetCurrencyQuery } = currenciesApi;
