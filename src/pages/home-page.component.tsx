import { PageCard, StatsSummary } from "components";
import { Route } from "enums";
import { Link } from "react-router-dom";
import { NewsItem } from "shared/models/news-model";
import CryptoCard from "../components/CryptoCard";
import NewsCard from "../components/NewsCard";
import Loading from "../components/common/Loading";
import { Crypto } from "../shared/models/crypto-model";
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
    return <Loading />;
  }

  return (
    <PageCard>
      <StatsSummary stats={cryptoStats} />
      <div className="sm:mb-[40px]] mb-[20px] flex flex-col gap-[20px] sm:gap-[40px]">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-center sm:text-left">Top 10 Cryptos</h1>
          <Link to={Route.Currencies}>Show More</Link>
        </div>
        <div className="flex w-full flex-col flex-wrap gap-[16px] sm:flex-row">
          {cryptos?.map((crypto: Crypto, index: any) => {
            return <CryptoCard crypto={crypto} key={index} />;
          })}
        </div>
      </div>
      <div className="flex w-full flex-col gap-[20px] sm:gap-[40px]">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-center sm:text-left">News</h1>
          <Link to={Route.News}>Show More</Link>
        </div>
        <div className="flex w-full flex-col flex-wrap gap-[16px] sm:flex-row">
          {newsList?.map((news: NewsItem, index: any) => {
            return <NewsCard news={news} key={index} />;
          })}
        </div>
      </div>
    </PageCard>
  );
};
