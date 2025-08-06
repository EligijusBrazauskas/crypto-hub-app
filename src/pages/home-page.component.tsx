import { useGetCurrenciesQuery } from "api/currency.api";
import { useGetNewsQuery } from "api/news.api";
import { CurrencyItem, NewsItem, PageCard, StatsSummary } from "components";
import { Flex, Grid } from "components/base";
import { Spinner } from "components/common";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { data, isFetching } = useGetCurrenciesQuery();
  const { data: newsData, isFetching: isFetchingNews } = useGetNewsQuery();

  const stats = data?.data?.stats;
  const currencies = data?.data?.coins;
  const news = newsData?.data;

  return (
    <PageCard>
      <StatsSummary stats={stats} />
      <Flex className="flex-col gap-10">
        <Flex className="flex-col items-center justify-between sm:flex-row">
          <h2 className="text-center sm:text-left">Top 10 Cryptos</h2>
          <Link to="currencies">Show More</Link>
        </Flex>
        <Spinner isLoading={isFetching}>
          <Grid className="grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {currencies?.map((currency, index) => {
              return <CurrencyItem key={index} currency={currency} />;
            })}
          </Grid>
        </Spinner>
      </Flex>
      <Flex className="flex-col gap-10">
        <Flex className="flex-col items-center justify-between sm:flex-row">
          <h2 className="text-center sm:text-left">News</h2>
          <Link to="news">Show More</Link>
        </Flex>
        <Spinner isLoading={isFetchingNews}>
          <Grid className="grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {news?.map((article, index) => {
              return <NewsItem article={article} key={index} />;
            })}
          </Grid>
        </Spinner>
      </Flex>
    </PageCard>
  );
};
