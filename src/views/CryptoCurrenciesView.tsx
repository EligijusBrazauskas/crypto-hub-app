import { useGetCryptosQuery } from '../shared/services/cryptoAPI';
import Loading from '../components/common/Loading';
import { Crypto } from '../shared/models/crypto-model';
import CryptoCard from '../components/CryptoCard';
import { useEffect, useState } from 'react';
import SearchBar from '../components/common/SearchBar';

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
		<div className='min-w-full min-h-screen sm:min-h-full bg-gradient-to-r from-white to-nearlyWhite rounded-[24px] py-[20px] sm:py-[40px] px-[10px] sm:px-[20px]'>
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
