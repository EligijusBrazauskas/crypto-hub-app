import millify from 'millify';
import { Link } from 'react-router-dom';
import LabelTextRow from '../../components/common/LabelTextRow';
import Loading from '../../components/common/Loading';
import { useGetCryptosQuery } from '../../services/cryptoAPI';

const HomepageView = () => {
	const { data, isFetching } = useGetCryptosQuery();

	const cryptoStats = data?.data?.stats;

	if (isFetching) return <Loading />;

	return (
		<div className='min-w-full h-full bg-white rounded-[24px] py-[40px] px-[20px]'>
			<div className='flex flex-col gap-[40px]'>
				<h1>Global Crypto Statistics</h1>
				<div className='flex flex-col gap-[16px]'>
					<div className='flex flex-wrap gap-[16px]'>
						<LabelTextRow label='Total Cryptocurrencies' text={cryptoStats.total} />
						<LabelTextRow label='Total Exchanges' text={cryptoStats.totalExchanges} />
					</div>
					<div className='flex flex-wrap gap-[16px]'>
						<LabelTextRow
							label='Total Market Cap'
							text={millify(cryptoStats.totalMarketCap)}
						/>
						<LabelTextRow
							label='Total 24h Volume'
							text={millify(cryptoStats.total24hVolume)}
						/>
					</div>
					<div className='flex flex-wrap gap-[16px]'>
						<LabelTextRow label='Total Markets' text={cryptoStats.totalMarkets} />
						<div className='flex flex-col flex-1'></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomepageView;
