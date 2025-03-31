import { useGetCurrenciesQuery } from "api/currency.api";
import { CurrencyItem, NewsItem, PageCard, StatsSummary } from "components";
import { Route } from "enums";
import { Currency } from "interfaces";
import { Link } from "react-router-dom";
import { useGetNewsQuery } from "../api/news.api";
import Loading from "../components/common/Loading";

export const HomePage = () => {
  const { data, isFetching } = useGetCurrenciesQuery();
  const { data: news, isFetching: isFetchingNews } = useGetNewsQuery();

  const stats = data?.data?.stats;
  const currencies = data?.data?.coins;
  const newsList = news?.data;

  if (isFetching || isFetchingNews) {
    return <Loading />;
  }

  return (
    <PageCard>
      {stats && <StatsSummary stats={stats} />}
      <div className="sm:mb-[40px]] mb-[20px] flex flex-col gap-[20px] sm:gap-[40px]">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-center sm:text-left">Top 10 Cryptos</h1>
          <Link to={Route.Currencies}>Show More</Link>
        </div>
        <div className="flex w-full flex-col flex-wrap gap-[16px] sm:flex-row">
          {currencies?.map((currency: Currency) => {
            return <CurrencyItem key={currency.name} currency={currency} />;
          })}
        </div>
      </div>
      <div className="flex w-full flex-col gap-[20px] sm:gap-[40px]">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <h1 className="text-center sm:text-left">News</h1>
          <Link to={Route.News}>Show More</Link>
        </div>
        <div className="flex w-full flex-col flex-wrap gap-[16px] sm:flex-row">
          {newsList?.map((article, index: number) => {
            return <NewsItem article={article} key={index} />;
          })}
        </div>
      </div>
    </PageCard>
  );
};
