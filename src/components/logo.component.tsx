import { Link } from 'react-router-dom';
import icon from '../assets/svg/crypto-hub-logo.svg';
import { routes } from '../shared/router/routes';

export const Logo = () => (
  <Link
    to={routes.home}
    className='flex items-center gap-2'
  >
    <img src={icon} alt='Crypto Hub Logo' className='w-12' />
    <span className='text-2xl text-black font-bold whitespace-nowrap'>Crypto Hub</span>
  </Link>
);
