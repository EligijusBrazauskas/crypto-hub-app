import MainLayout from './layout/main/MainLayout';
import './assets/scss/global.scss';
import ScrollPositionProvider from './shared/context/scroll-position-context';

const App = () => (
	<ScrollPositionProvider>
		<div className='App'>
			<MainLayout />
		</div>
	</ScrollPositionProvider>
);

export default App;
