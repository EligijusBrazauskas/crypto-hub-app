import { Sidebar } from 'components';
import NavbarMobile from 'components/NavbarMobile';
import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages';
import { ScrollPositionContext } from '../shared/context/scroll-position-context';
import { routes } from '../shared/router/routes';
import {
  CryptoCurrenciesView,
  CryptoDetailsView,
  NewsView
} from '../views';

export const MainLayout = () => {
  const scrollPositionCtx = useContext(ScrollPositionContext);

  return (
    <>
      <div className='bg-accent-blue flex flex-col min-h-screen'>
        <Sidebar />
        <div className='sm:ml-64 flex flex-1 py-4 pr-4'>
          <Routes >
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.cryptocurrencies} element={<CryptoCurrenciesView />} />
            <Route
              path={`${routes.cryptocurrencies}/:coinId`}
              element={<CryptoDetailsView />}
            />
            <Route path={routes.news} element={<NewsView />} />
            <Route path={'*'} element={<Navigate to={routes.home} />} />
          </Routes>
        </div>
      </div >
      <NavbarMobile scrollPosition={scrollPositionCtx.position} />
    </>
  );
};
