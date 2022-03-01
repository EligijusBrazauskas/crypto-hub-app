interface ICrypto {
  rank: number,
  name: string,
  iconUrl: string,
  price: string | number,
  marketCap: string | number,
  change: string | number
  symbol?: any
}

export class Crypto {
  rank: number;
  name: string;
  iconUrl: string;
  price: string | number;
  marketCap: string | number;
  change: string | number;
  symbol?: any;

  constructor(data: ICrypto) {
    this.rank = data.rank,
    this.name = data.name,
    this.iconUrl = data.iconUrl,
    this.price = data.price,
    this.marketCap = data.marketCap,
    this.change = data.change
    this.symbol = data.symbol
  }
}