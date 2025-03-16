import { PageCard, PageHeader } from 'components';
import { useEffect, useState } from 'react';
import CryptoCard from '../components/CryptoCard';
import Loading from '../components/common/Loading';
import { Crypto } from '../shared/models/crypto-model';
import { useGetCryptosQuery } from '../shared/services/cryptoAPI';

export const CurrenciesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cryptosList, setCryptosList] = useState<Crypto[]>([]);

  const count = 100;

  const { data, isFetching } = useGetCryptosQuery(count);

  const cryptos = data?.data?.coins;

  useEffect(() => {
    if (!isFetching) {
      setCryptosList(cryptos);

      const filteredList = cryptos.filter((coin: Crypto) =>
        coin.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

      setCryptosList(filteredList);
    }
  }, [data, searchTerm]);



  if (isFetching) return <Loading />;

  return (
    <PageCard>
      <PageHeader onSearch={setSearchTerm} />
      <div className='flex flex-wrap gap-4 w-full'>
        {cryptosList?.map((crypto: Crypto) => {
          return <CryptoCard crypto={crypto} key={crypto.name} />;
        })}
      </div>
    </PageCard>
  );
};
