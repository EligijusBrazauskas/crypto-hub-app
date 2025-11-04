import { useGetCurrenciesQuery } from "api/currency.api";
import { NewsItem, PageCard } from "components";
import { Flex, Grid } from "components/base";
import { Spinner } from "components/common";
import { Article, Currency } from "interfaces";
import { useMemo, useState } from "react";
import Select, { SingleValue } from "react-select";
import { defaultParams, useGetNewsQuery } from "../api/news.api";

interface Option {
  value: string;
  label: string;
}

const defaultOption: Option = { value: '', label: 'All' };

export const NewsPage = () => {
  const [activeFilter, setActiveFilter] = useState<SingleValue<Option>>(defaultOption);

  const { data: cryptos, isFetching: isFetchingCryptos } =
    useGetCurrenciesQuery({ params: { limit: "100" } });

  const { data: news, isFetching: isFetchingNews } = useGetNewsQuery(
    {
      ...defaultParams,
      params: { ...defaultParams.params, query: activeFilter?.value || defaultParams.params.query }
    }
  );

  const newsList = news?.data;
  const currencies = cryptos?.data?.coins ?? [];

  const getOptions = useMemo(() => {
    const symbolOptions = currencies.map((crypto: Currency) => ({
      value: crypto.name,
      label: crypto.symbol,
    }));

    return [defaultOption, ...symbolOptions];
  }, [currencies]);

  return (
    <PageCard>
      <Flex className="flex-col items-center justify-between gap-4 sm:flex-row">
        <h1>News</h1>
        {!isFetchingCryptos && (
          <Select
            className="w-full rounded-md text-sm sm:w-auto"
            options={getOptions}
            onChange={setActiveFilter}
            placeholder="Select Category"
            isSearchable
          />
        )}
      </Flex>
      <Spinner isLoading={isFetchingNews}>
        <Grid className="grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {newsList?.map((article: Article, index: number) => {
            return <NewsItem article={article} key={index} />;
          })}
        </Grid>
      </Spinner>
    </PageCard>
  );
};
