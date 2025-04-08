import { useGetCurrenciesQuery } from "api/currency.api";
import { CurrencyItem, NewsItem, PageCard, StatsSummary } from "components";
import { Flex } from "components/base";
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
      <Flex className="flex-col gap-5 sm:mb-10 sm:gap-10">
        <Flex className="flex-col items-center justify-between sm:flex-row">
          <h2 className="text-center sm:text-left">Top 10 Cryptos</h2>
          <Link to="currencies">Show More</Link>
        </Flex>
        <Flex className="flex-col flex-wrap gap-4 sm:flex-row">
          {currencies?.map((currency: Currency) => {
            return <CurrencyItem key={currency.name} currency={currency} />;
          })}
        </Flex>
      </Flex>
      <Flex className="flex-col gap-5 sm:mb-10 sm:gap-10">
        <Flex className="flex-col items-center justify-between sm:flex-row">
          <h2 className="text-center sm:text-left">News</h2>
          <Link to="news">Show More</Link>
        </Flex>
        <Flex className="flex-col flex-wrap gap-4 sm:flex-row">
          {newsList?.map((article, index: number) => {
            return <NewsItem article={article} key={index} />;
          })}
        </Flex>
      </Flex>
    </PageCard>
  );
};
