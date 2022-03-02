import { routes } from '../../shared/router/routes';
import { HomeFilled, FundFilled, BulbFilled } from '@ant-design/icons';
import NavigationLink from '../common/NavigationLink';
import Logo from '../common/Logo';

const Navbar = () => {
	return (
		<div className='hidden sm:block max-w-[250px] w-full min-h-screen py-[40px] px-[30px] fixed'>
			<div className='mb-[40px] w-full'>
				<Logo />
			</div>
			<div className='flex flex-col items-center justify-center gap-[1px]'>
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
};

export default Navbar;
