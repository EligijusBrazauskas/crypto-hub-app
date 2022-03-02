import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiHeaders = {
	'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
	'x-rapidapi-key': 'c10b5919bbmsh5904a167f5b63c0p1823b3jsnbe52fe00985c'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url: string) => ({ url, headers: apiHeaders });

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query<any, any>({
			query: (count) => createRequest(`/coins?limit=${count}`)
		}),
		getCryptoDetails: builder.query<any, any>({
			query: (coinId) => createRequest(`/coin/${coinId}`)
		}),
	})
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
} = cryptoApi;
