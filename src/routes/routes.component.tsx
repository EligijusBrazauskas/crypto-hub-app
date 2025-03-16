import { CurrenciesPage, HomePage } from "pages";
import { Navigate, Route, Routes as RouterRoutes } from "react-router-dom";
import { routes } from "shared/router/routes";
import { CryptoDetailsView, NewsView } from "views";

export const Routes = () => (
  <RouterRoutes >
    <Route path={routes.home} element={<HomePage />} />
    <Route path={routes.cryptocurrencies} element={<CurrenciesPage />} />
    <Route
      path={`${routes.cryptocurrencies}/:coinId`}
      element={<CryptoDetailsView />}
    />
    <Route path={routes.news} element={<NewsView />} />
    <Route path={'*'} element={<Navigate to={routes.home} />} />
  </RouterRoutes>
)