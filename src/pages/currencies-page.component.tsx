import { useGetCurrenciesQuery } from "api/currency.api";
import { CurrencyItem, PageCard, PageHeader } from "components";
import { Currency } from "interfaces";
import { useEffect, useState } from "react";

export const CurrenciesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptosList, setCryptosList] = useState<Currency[]>([]);

  const { data, isFetching } = useGetCurrenciesQuery({ params: { limit: '100' } });

  const currencies = data?.data?.coins;

  useEffect(() => {
    if (!isFetching) {
      if (currencies && currencies?.length > 0) {
        setCryptosList(currencies);

        const filteredList = currencies.filter((coin: Currency) =>
          coin.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
        );

        setCryptosList(filteredList);
      }
    }
  }, [data, searchTerm]);


  return (
    <PageCard>
      <PageHeader
        onSearch={setSearchTerm}
      />
      <div className="flex w-full flex-wrap gap-4">
        {cryptosList?.map((currency: Currency) => {
          return <CurrencyItem key={currency.name} currency={currency} />;
        })}
      </div>
    </PageCard>
  );
};
