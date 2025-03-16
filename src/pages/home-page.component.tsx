import { PageCard } from "components";
import millify from "millify";
import { Link } from "react-router-dom";
import CryptoCard from "../components/CryptoCard";
import NewsCard from "../components/NewsCard";
import LabelTextRow from "../components/common/LabelTextRow";
import Loading from "../components/common/Loading";
import type { Crypto } from "../shared/models/crypto-model";
import type { NewsItem } from "../shared/models/news-model";
import { routes } from "../shared/router/routes";
import { useGetCryptosQuery } from "../shared/services/cryptoAPI";
import { useGetNewsQuery } from "../shared/services/newsApi";

export const HomePage = () => {
  const count = 10;
  const newsCount = 6;

  const { data, isFetching } = useGetCryptosQuery(count);
  const { data: news, isFetching: isFetchingNews } = useGetNewsQuery({
    category: "Cryptocurrency",
    count: newsCount,
  });

  const cryptoStats = data?.data?.stats;
  const cryptos = data?.data?.coins;
  const newsList = news?.value;

  if (isFetching || isFetchingNews) {
    return <Loading />
  }

  return (
    <PageCard>
      <h1 className="text-center sm:text-left">Global Crypto Statistics</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex gap-4 text-center sm:text-left">
          <LabelTextRow
            label="Total Cryptocurrencies"
            text={cryptoStats?.total}
          />
          <LabelTextRow
            label="Total Exchanges"
            text={cryptoStats?.totalExchanges}
          />
        </div>
        <div className="flex flex-wrap gap-[16px] text-center sm:text-left">
          <LabelTextRow
            label="Total Market Cap"
            text={millify(cryptoStats?.totalMarketCap)}
          />
          <LabelTextRow
            label="Total 24h Volume"
            text={millify(cryptoStats?.total24hVolume)}
          />
        </div>
        <div className="flex flex-wrap gap-[16px] text-center sm:text-left">
          <LabelTextRow
            label="Total Markets"
            text={cryptoStats.totalMarkets}
          />
          <div className="flex flex-col flex-1" />
        </div>
      </div>
      <div className="flex flex-col gap-[20px] sm:gap-[40px] mb-[20px] sm:mb-[40px]]">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <h1 className="text-center sm:text-left">Top 10 Cryptos</h1>
          <Link to={routes.cryptocurrencies}>
            Show More
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-[16px] w-full">
          {cryptos?.map((crypto: Crypto, index: any) => {
            return <CryptoCard crypto={crypto} key={index} />;
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[20px] sm:gap-[40px] w-full">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <h1 className="text-center sm:text-left">News</h1>
          <Link to={routes.news}>
            Show More
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-[16px] w-full">
          {newsList?.map((news: NewsItem, index: any) => {
            return <NewsCard news={news} key={index} />;
          })}
        </div>
      </div>
    </PageCard>
  );
};
