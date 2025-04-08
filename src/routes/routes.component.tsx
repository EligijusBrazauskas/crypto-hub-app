import { CurrenciesPage, CurrencyPage, HomePage, NewsPage } from "pages";
import {
  Navigate,
  Route,
  Routes as RouterRoutes,
} from "react-router-dom";

export const Routes = () => (
  <RouterRoutes>
    <Route index element={<HomePage />} />
    <Route path="currencies" element={<CurrenciesPage />} />
    <Route path="currencies/:coinId" element={<CurrencyPage />} />
    <Route path="news" element={<NewsPage />} />
    <Route path="*" element={<Navigate to="/" />} />
  </RouterRoutes>
);
