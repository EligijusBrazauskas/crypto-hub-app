import { useGetCryptosQuery } from '../../services/cryptoAPI';
import Loading from '../../components/common/Loading';
import { routes } from '../../shared/router/routes';
import { Link } from 'react-router-dom';
import { Crypto } from '../../shared/models/crypto-model';
import CryptoCard from '../../components/common/CryptoCard';
import { ChangeEventHandler, FormEvent, useEffect, useState } from 'react';
import SearchBar from '../../components/common/SearchBar';

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
		<div className='min-w-full h-full bg-gradient-to-r from-white to-nearlyWhite rounded-[24px] py-[40px] px-[20px]'>
			<div className='flex flex-col gap-[40px]'>
				<div className='flex justify-between items-center'>
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
