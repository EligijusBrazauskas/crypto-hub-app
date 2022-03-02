import Navbar from '../../components/navbar/Navbar';
import {
	HomepageView,
	CryptoDetailsView,
	NewsView,
	CryptoCurrenciesView
} from '../../views';
import { routes } from '../../shared/router/routes';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavbarMobile from '../../components/navbar/NavbarMobile';
import { useContext } from 'react';
import { ScrollPositionContext } from '../../shared/context/scroll-position-context';

const MainLayout = () => {
	const scrollPositionCtx = useContext(ScrollPositionContext);

	return (
		<>
			<div className='min-h-screen bg-lightestBlue flex flex-col sm:flex-row pt-[15px] pr-[15px] pb-[80px] sm:pb-[15px] pl-[15px] sm:pl-[0px] mb-auto'>
				<Navbar />
				<div className='w-full ml-[0px] sm:ml-[250px]'>
					<Routes>
						<Route path={routes.home} element={<HomepageView />} />
						<Route path={routes.cryptocurrencies} element={<CryptoCurrenciesView />} />
						<Route
							path={`${routes.cryptocurrencies}/:coinId`}
							element={<CryptoDetailsView />}
						/>
						<Route path={routes.news} element={<NewsView />} />
						<Route path={'*'} element={<Navigate to={routes.home} />} />
					</Routes>
				</div>
			</div>
			<NavbarMobile scrollPosition={scrollPositionCtx.position} />
		</>
	);
};

export default MainLayout;
