import { QueryReturnValue } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createRequest } from "helpers";
import {
	GetCurrenciesQueryResponse,
	GetCurrencyQueryParams,
	GetCurrencyQueryResponse,
	QueryRequestParams,
} from "interfaces";

const headers: Record<string, string> = {
	"x-rapidapi-host": "coinranking1.p.rapidapi.com",
	"x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY ?? "",
};

export const defaultParams: QueryRequestParams = {
	params: { limit: "10" },
};

export const currenciesApi = createApi({
	reducerPath: "currencies",
	baseQuery: fetchBaseQuery({ baseUrl: "https://coinranking1.p.rapidapi.com" }),
	endpoints: (builder) => ({
		getCurrencies: builder.query<
			QueryReturnValue<GetCurrenciesQueryResponse>,
			QueryRequestParams | void
		>({
			query: (params = defaultParams) =>
				createRequest("/coins", headers, params?.params),
		}),
		getCurrency: builder.query<
			QueryReturnValue<GetCurrencyQueryResponse>,
			GetCurrencyQueryParams
		>({
			query: ({ coinId, params = defaultParams.params }) =>
				createRequest(`/coin/${coinId}`, headers, params),
		}),
	}),
});

export const { useGetCurrenciesQuery, useGetCurrencyQuery } = currenciesApi;
