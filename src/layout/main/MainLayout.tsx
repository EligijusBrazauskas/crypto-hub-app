import classes from './main-layout.module.scss';
import { Navbar } from '../../components';
import {
	HomepageView,
	CryptoDetailsView,
	ExchangesView,
	NewsView,
	CryptoCurrenciesView,
} from '../../views';
import { routes } from '../../shared/router/routes';
import { Routes, Route } from 'react-router-dom';

const MainLayout = () => (
	<div className='min-h-screen bg-lightestBlue flex'>
		<Navbar />
		<div className='w-full'>
			<Routes>
				<Route path={routes.home} element={<HomepageView />} />
				<Route path={routes.cryptocurrencies} element={<CryptoCurrenciesView />} />
				<Route path={routes.cryptoDetails} element={<CryptoDetailsView />} />
				<Route path={routes.exchanges} element={<ExchangesView />} />
				<Route path={routes.news} element={<NewsView />} />
			</Routes>
		</div>
	</div>
);

export default MainLayout;
