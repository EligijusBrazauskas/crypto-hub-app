import { Params } from "react-router-dom";

export interface GetNewsQueryParamsRequired {
	query: string;
	language: string;
}

export interface GetNewsQueryParams {
	params: GetNewsQueryParamsRequired & Params;
}

export interface Publisher {
	name: string;
	url: string;
	favicon: string;
}

export interface Article {
	title: string;
	url: string;
	excerpt: string;
	thumbnail: string;
	language: string;
	paywall: boolean;
	contentLength: number;
	date: string;
	authors: string[];
	keywords: string[];
	publisher: Publisher;
}

export interface GetNewsQueryResponse {
	success: string;
	size: number;
	totalHits: number;
	hitsPerPage: number;
	page: number;
	totalPages: number;
	timeMs: number;
	data: Article[];
}
