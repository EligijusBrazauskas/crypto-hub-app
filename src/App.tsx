import 'assets/css/global.css';
import { MainLayout } from './layouts';
import ScrollPositionProvider from './shared/context/scroll-position-context';

export const App = () => (
  <div className='app'>
    <ScrollPositionProvider>
      <MainLayout />
    </ScrollPositionProvider>
  </div>
);
