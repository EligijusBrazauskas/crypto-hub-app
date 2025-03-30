import { Route } from "enums";
import { CurrenciesPage, CurrencyPage, HomePage, NewsPage } from "pages";
import {
  Navigate,
  Route as RouterRoute,
  Routes as RouterRoutes,
} from "react-router-dom";

export const Routes = () => (
  <RouterRoutes>
    <RouterRoute path={Route.Home} element={<HomePage />} />
    <RouterRoute path={Route.Currencies} element={<CurrenciesPage />} />
    <RouterRoute path={`${Route.Currencies}/:coinId`} element={<CurrencyPage />} />
    <RouterRoute path={Route.News} element={<NewsPage />} />
    <RouterRoute path={"*"} element={<Navigate to={Route.Home} />} />
  </RouterRoutes>
);
