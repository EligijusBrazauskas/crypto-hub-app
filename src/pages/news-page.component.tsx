import { useGetCurrenciesQuery } from "api/currency.api";
import { NewsItem, PageCard } from "components";
import { Currency } from "interfaces";
import { useState } from "react";
import Select, { SingleValue } from "react-select";
import { useGetNewsQuery } from "../api/news.api";
import MessageCard from "../components/MessageCard";
import Loading from "../components/common/Loading";

type MyOption = { value: string; label: string };

export const NewsPage = () => {
  const [activeFilter, setActiveFilter] = useState<
    SingleValue<MyOption> | MyOption
  >({ value: "all", label: "cryptocurrency" });

  const { data: cryptos, isFetching: isFetchingCryptos } =
    useGetCurrenciesQuery({ params: { limit: "100" } });

  const { data: news, isFetching: isFetchingNews } = useGetNewsQuery();

  const newsList = news?.data;
  const currencies = cryptos?.data?.coins ?? [];

  const getOptions = (): MyOption[] => {
    const symbolOptions = currencies.map((crypto: Currency) => ({ value: `${crypto.name} crypto`, label: crypto.symbol }));

    return [{ value: "cryptocurrency", label: "ALL" }, ...symbolOptions];
  };

  return (
    <PageCard>
      <div className="flex h-full flex-col gap-[20px] sm:gap-[40px]">
        <div className="flex flex-col items-center justify-between gap-[16px] sm:flex-row sm:gap-[0px]">
          <h1>News</h1>
          {!isFetchingCryptos && (
            <Select
              className="w-full text-sm sm:w-[150px]"
              options={getOptions()}
              onChange={setActiveFilter}
              placeholder="Select Category"
              isSearchable
            />
          )}
        </div>
        <div className="h-full w-full">
          {isFetchingNews ? (
            <Loading />
          ) : (
            <div className="flex w-full flex-col flex-wrap gap-[16px] sm:flex-row">
              {newsList?.map((article, index: number) => {
                return <NewsItem article={article} key={index} />;
              })}
            </div>
          )}
          {newsList?.length === 0 && (
            <MessageCard text="No results were found for selected cryptocurrency" />
          )}
        </div>
      </div>
    </PageCard>
  );
};
