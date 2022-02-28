import { routes } from '../../shared/router/routes';
import {
	HomeFilled,
	FundFilled,
	ProjectFilled,
	BulbFilled,
} from '@ant-design/icons';
import NavigationLink from '../common/NavigationLink';
import Logo from '../common/Logo';

const Navbar = () => {
	return (
		<div className='max-w-[250px] w-full min-h-screen py-[40px] px-[30px] fixed'>
			<div className='mb-[40px] w-full'>
				<Logo />
			</div>
			<div className='flex flex-col items-center justify-center gap-[1px]'>
				<NavigationLink pathTo={routes.home} text='Home' isActive={true}>
					<HomeFilled />
				</NavigationLink>
				<NavigationLink
					pathTo={routes.cryptocurrencies} text='Currencies' isActive={false}>
					<FundFilled />
				</NavigationLink>
				<NavigationLink pathTo={routes.exchanges} text='Exchanges' isActive={false}>
					<ProjectFilled />
				</NavigationLink>
				<NavigationLink pathTo={routes.news} text='News' isActive={false}>
					<BulbFilled />
				</NavigationLink>
			</div>
		</div>
	);
};

export default Navbar;
