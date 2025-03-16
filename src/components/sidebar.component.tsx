import { BulbFilled, FundFilled, HomeFilled } from '@ant-design/icons';
import { Logo } from 'components';
import { routes } from 'enums/route.enum';
import NavigationLink from './common/NavigationLink';

export const Sidebar = () => (
  <div className='flex-col gap-10 pt-14 pb-10 px-8 hidden sm:flex fixed w-64 bg-accent-blue h-screen'>
    <Logo />
    <div className='flex flex-col w-full gap-2'>
      <NavigationLink pathTo={routes.home} text='Home'>
        <HomeFilled />
      </NavigationLink>
      <NavigationLink pathTo={routes.cryptocurrencies} text='Currencies'>
        <FundFilled />
      </NavigationLink>
      <NavigationLink pathTo={routes.news} text='News'>
        <BulbFilled />
      </NavigationLink>
    </div>
  </div>
);
