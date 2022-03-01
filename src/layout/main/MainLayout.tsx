import classes from './main-layout.module.scss';
import { Navbar } from '../../components';
import {
	HomepageView,
	CryptoDetailsView,
	ExchangesView,
	NewsView,
	CryptoCurrenciesView
} from '../../views';
import { routes } from '../../shared/router/routes';
import { Routes, Route, Navigate } from 'react-router-dom';

const MainLayout = () => (
	<div className='min-h-screen bg-lightestBlue flex pt-[15px] pr-[15px] pb-[15px]'>
		<Navbar />
		<div className='w-full ml-[250px]'>
			<Routes>
				<Route path={routes.home} element={<HomepageView />} />
				<Route path={routes.cryptocurrencies} element={<CryptoCurrenciesView />} />
				<Route path={`${routes.cryptocurrencies}/:symbol`} element={<CryptoDetailsView />} />
				<Route path={routes.exchanges} element={<ExchangesView />} />
				<Route path={routes.news} element={<NewsView />} />
				<Route path={'*'} element={<Navigate to={routes.home} />} />
			</Routes>
		</div>
	</div>
);

export default MainLayout;
