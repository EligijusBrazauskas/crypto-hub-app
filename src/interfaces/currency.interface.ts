export interface Currency {
	uuid: string;
	rank: number;
	name: string;
	iconUrl: string;
	price: string | number;
	marketCap: string | number;
	change: string | number;
	symbol?: string;
}
