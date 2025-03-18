import "assets/css/global.css";
import { Routes } from "routes";
import { MainLayout } from "./layouts";
import ScrollPositionProvider from "./shared/context/scroll-position-context";

export const App = () => (
	<div className="app">
		<ScrollPositionProvider>
			<MainLayout>
				<Routes />
			</MainLayout>
		</ScrollPositionProvider>
	</div>
);
