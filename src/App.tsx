import "assets/css/global.css";
import { Routes } from "routes";
import ScrollPositionProvider from "./context/scroll-position.context";
import { MainLayout } from "./layouts";

export const App = () => (
  <div className="app">
    <ScrollPositionProvider>
      <MainLayout>
        <Routes />
      </MainLayout>
    </ScrollPositionProvider>
  </div>
);
