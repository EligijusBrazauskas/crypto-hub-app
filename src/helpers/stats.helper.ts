import millify from "millify";

export const formatStats = (stats: any) => [
	{
		id: 1,
		stats: [
			{ title: "Total Cryptocurrencies", value: stats?.total },
			{ title: "Total Exchanges", value: stats?.totalExchanges },
			{ title: "Total Market Cap", value: millify(stats?.totalMarketCap) },
		],
	},
	{
		id: 2,
		stats: [
			{ title: "Total 24h Volume", value: millify(stats?.total24hVolume) },
			{ title: "Total Markets", value: stats.totalMarkets },
		],
	},
];
