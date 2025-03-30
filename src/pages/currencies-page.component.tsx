import { useGetCurrenciesQuery } from "api/currencies.api";
import { PageCard, PageHeader } from "components";
import { Currency } from "interfaces";
import { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoCard";
import Loading from "../components/common/Loading";

export const CurrenciesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cryptosList, setCryptosList] = useState<Currency[]>([]);

  const count = 100;

  const { data, isFetching } = useGetCurrenciesQuery(count);

  const cryptos = data?.data?.coins;

  useEffect(() => {
    if (!isFetching) {
      setCryptosList(cryptos);

      const filteredList = cryptos.filter((coin: Currency) =>
        coin.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()),
      );

      setCryptosList(filteredList);
    }
  }, [data, searchTerm]);

  if (isFetching) return <Loading />;

  return (
    <PageCard>
      <PageHeader onSearch={setSearchTerm} />
      <div className="flex w-full flex-wrap gap-4">
        {cryptosList?.map((crypto: Currency) => {
          return <CryptoCard crypto={crypto} key={crypto.name} />;
        })}
      </div>
    </PageCard>
  );
};
