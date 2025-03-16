import { Sidebar } from 'components';
import NavbarMobile from 'components/NavbarMobile';
import { ReactNode, useContext } from 'react';
import { ScrollPositionContext } from '../shared/context/scroll-position-context';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const scrollPositionCtx = useContext(ScrollPositionContext);

  return (
    <>
      <div className='bg-accent-blue flex flex-col min-h-screen'>
        <Sidebar />
        <div className='sm:ml-64 flex flex-1 py-4 pr-4'>
          {children}
        </div>
      </div >
      <NavbarMobile scrollPosition={scrollPositionCtx.position} />
    </>
  );
};
