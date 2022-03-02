import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import Loading from '../components/common/Loading';
import MessageCard from '../components/MessageCard';
import NewsCard from '../components/NewsCard';
import { useGetCryptosQuery } from '../shared/services/cryptoAPI';
import { useGetNewsQuery } from '../shared/services/newsApi';
import { Crypto } from '../shared/models/crypto-model';
import { NewsItem } from '../shared/models/news-model';

type MyOption = { value: string; label: string };

const NewsView = () => {
	const [activeFilter, setActiveFilter] = useState<
		SingleValue<MyOption> | MyOption
	>({ value: 'all', label: 'cryptocurrency' });

	const cryptosCount = 100;
	const newsCount = 20;

	const { data: cryptos, isFetching: isFetchingCryptos } =
		useGetCryptosQuery(cryptosCount);
	const { data: news, isFetching: isFetchingNews } = useGetNewsQuery({
		category: activeFilter?.value,
		count: newsCount
	});

	const newsList = news?.value;
	const cryptosList = cryptos?.data?.coins;

	const getOptions = (): MyOption[] => {
		const symbolOptions = cryptosList.map((crypto: Crypto) => {
			return { value: `${crypto.name} crypto`, label: crypto.symbol };
		});

		return [{ value: 'cryptocurrency', label: 'ALL' }, ...symbolOptions];
	};

	return (
		<div className='min-w-full min-h-screen sm:min-h-full bg-gradient-to-r from-white to-nearlyWhite rounded-[24px] py-[20px] sm:py-[40px] px-[10px] sm:px-[20px]'>
			<div className='flex flex-col gap-[20px] sm:gap-[40px] h-full'>
				<div className='flex flex-col sm:flex-row gap-[16px] sm:gap-[0px] justify-between items-center'>
					<h1>News</h1>
					{!isFetchingCryptos && (
						<Select
							className='w-full sm:w-[150px] text-secondary'
							options={getOptions()}
							onChange={setActiveFilter}
							placeholder='Select Category'
							isSearchable
						/>
					)}
				</div>
				<div className='h-full w-full'>
					{isFetchingNews ? (
						<Loading />
					) : (
						<div className='flex flex-col sm:flex-row flex-wrap gap-[16px] w-full'>
							{newsList?.map((news: NewsItem, index: any) => {
								return <NewsCard news={news} key={index} />;
							})}
						</div>
					)}
					{newsList?.length === 0 && (
						<MessageCard text='No results were found for selected cryptocurrency' />
					)}
				</div>
			</div>
		</div>
	);
};

export default NewsView;
