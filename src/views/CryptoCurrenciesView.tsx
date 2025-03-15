import { useEffect, useState } from 'react';
import CryptoCard from '../components/CryptoCard';
import Loading from '../components/common/Loading';
import SearchBar from '../components/common/SearchBar';
import { Crypto } from '../shared/models/crypto-model';
import { useGetCryptosQuery } from '../shared/services/cryptoAPI';

const CryptoCurrenciesView = () => {
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

  const handleSearchTerm = (value: any) => {
    setSearchTerm(value);
  };

  if (isFetching) return <Loading />;

  return (
    <div className='min-w-full min-h-screen sm:min-h-full bg-gradient-to-r from-white to-accent-white rounded-[24px] py-[20px] sm:py-[40px] px-[10px] sm:px-[20px]'>
      <div className='flex flex-col gap-[20px] sm:gap-[40px]'>
        <div className='flex flex-col sm:flex-row gap-[16px] sm:gap-[0px] justify-between items-center'>
          <h1>All Cryptos</h1>
          <SearchBar getSearchValue={handleSearchTerm} placeholder='Search Crypto' />
        </div>
        <div className='flex flex-wrap gap-[16px] w-full'>
          {cryptosList?.map((crypto: Crypto) => {
            return <CryptoCard crypto={crypto} key={crypto.name} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CryptoCurrenciesView;
