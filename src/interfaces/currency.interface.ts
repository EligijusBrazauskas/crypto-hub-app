export interface Currency {
	price: string;
	uuid: string;
	symbol: string;
	name: string;
	color: string;
	iconUrl: string;
	marketCap: string;
	rank: number;
	change: string;
}

export interface Stats {
	total: number;
	totalCoins: number;
	totalMarkets: number;
	totalExchanges: number;
	totalMarketCap: string;
	total24hVolume: string;
}

export interface GetCurrenciesQuery {
	coins: Currency[];
	stats: Stats;
}

export interface Link {
	name: string;
	type: string;
	url: string;
}

export interface AllTimeHigh {
	price: string;
	timestamp: number;
}

export interface Supply {
	confirmed: boolean;
	total: string;
	circulating: string;
}

export interface Coin extends Currency {
	description: string;
	websiteUrl: string;
	links: Link[];
	allTimeHigh: AllTimeHigh;
	numberOfMarkets: number;
	numberOfExchanges: number;
	supply: Supply;
}

export interface GetCurrencyQuery {
	coin: Coin;
}
