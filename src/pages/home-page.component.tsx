import { PageCard, StatsSummary } from "components";
import { Link } from "react-router-dom";
import CryptoCard from "../components/CryptoCard";
import NewsCard from "../components/NewsCard";
import Loading from "../components/common/Loading";
import teroutesom "../enumsenumssroutes
import type { Crypto from "../shared/models/crcrypto-model";
import type tyNewsItemewsItem } frshared / models.news - modeld / models / news - model";
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
      <StatsSummary stats={cryptoStats} />
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
