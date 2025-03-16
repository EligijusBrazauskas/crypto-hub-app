import { Route } from "enums";
import { CurrenciesPage, HomePage } from "pages";
import { Navigate, Route as RouterRoute, Routes as RouterRoutes } from "react-router-dom";
import { CryptoDetailsView, NewsView } from "views";

export const Routes = () => (
  <RouterRoutes >
    <RouterRoute path={Route.Home} element={<HomePage />} />
    <RouterRoute path={Route.Currencies} element={<CurrenciesPage />} />
    <RouterRoute
      path={`${Route.Currencies}/:coinId`}
      element={<CryptoDetailsView />}
    />
    <RouterRoute path={Route.News} element={<NewsView />} />
    <RouterRoute path={'*'} element={<Navigate to={Route.Home} />} />
  </RouterRoutes>
)