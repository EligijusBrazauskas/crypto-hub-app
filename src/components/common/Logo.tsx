import { Link } from 'react-router-dom';
import icon from '../../assets/svg/crypto-hub-logo.svg';
import { routes } from '../../shared/router/routes';

const Logo = () => {
	return (
		<div className='flex justify-center items-center'>
			<Link
				to={routes.home}
				className='logo-text flex justify-between items-center w-full'
			>
				<div className='min-w-[50px] h-[50px]'>
					<img src={icon} alt='' className='w-full h-full' />
				</div>
				<h1 className='logo-text'>Crypto Hub</h1>
			</Link>
		</div>
	);
};

export default Logo;
