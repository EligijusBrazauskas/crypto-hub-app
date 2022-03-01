interface INewsItem {
  url: string,
  name: string,
  image: any,
  description: string,
  datePublished: any,
  provider: any
}

export class NewsItem {
  url: string;
  name: string;
  image: any;
  description: string;
  datePublished: any;
  provider: any

  constructor(data: INewsItem) {
    this.url = data.url,
    this.name = data.name,
    this.image = data.image,
    this.description = data.description,
    this.datePublished = data.datePublished,
    this.provider = data.provider
  }
}