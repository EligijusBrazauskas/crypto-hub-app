import { Link } from 'react-router-dom';
import logo from '../assets/svg/crypto-hub-logo.svg';
import { routes } from '../enums/route.enum';

export const Logo = () => (
  <Link
    to={routes.home}
    className='flex items-center gap-2'
  >
    <img src={logo} alt='Crypto Hub Logo' className='w-12' />
    <span className='text-2xl font-bold whitespace-nowrap'>Crypto Hub</span>
  </Link>
);
