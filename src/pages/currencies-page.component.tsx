import { useGetCurrenciesQuery } from "api/currency.api";
import { CurrencyItem, PageCard } from "components";
import { Flex, Grid } from "components/base";
import { SearchBar, Spinner } from "components/common";
import { Currency } from "interfaces";
import { useMemo, useState } from "react";

export const CurrenciesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isFetching } = useGetCurrenciesQuery({ params: { limit: '100' } });

  const currencies = data?.data?.coins;

  const filteredList = useMemo(() => {
    return currencies?.filter((coin: Currency) =>
      coin.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
    );
  }, [searchTerm, currencies])


  return (
    <PageCard>
      <Flex className="flex-col items-center justify-between gap-4 sm:flex-row">
        <h1>All Cryptos</h1>
        <SearchBar
          onChange={setSearchTerm}
          placeholder="Search Coins.."
        />
      </Flex>
      <Spinner isLoading={isFetching}>
        <Grid className="grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredList?.map((currency: Currency) => {
            return <CurrencyItem key={currency.name} currency={currency} />;
          })}
        </Grid>
      </Spinner>
    </PageCard>
  );
};
