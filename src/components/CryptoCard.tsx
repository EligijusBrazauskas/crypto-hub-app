import millify from 'millify';
import { Link } from 'react-router-dom';
import { Crypto } from '../shared/models/crypto-model';
import { routes } from '../shared/router/routes';
import { CardWrapper } from './common/styles/CardWrapper';

interface Props {
  crypto: Crypto;
}

const CryptoCard = ({ crypto }: Props) => (
  <Link
    to={`${routes.cryptocurrencies}/${crypto.uuid}`}
    className='shadow-large w-full lg:max-w-[50%] sm:min-w-[200px] md:min-w-[250px] lg:min-w-[250px] md:flex-1 rounded-[24px]'
  >
    <CardWrapper>
      <div className='flex justify-between items-center w-full border-b-2 border-secondary border-solid pb-[16px]'>
        <div className='flex gap-[6px]'>
          <span>{crypto.rank}.</span>
          <span>{crypto.name}</span>
        </div>
        <div className='flex justify-center items-center w-[30px] h-[30px]'>
          <img src={crypto.iconUrl} alt='icon' />
        </div>
      </div>
      <div className='flex flex-col gap-[8px] w-full pt-[16px]'>
        <span className='regular-label'>Price: ${millify(+crypto.price)}</span>
        <span className='regular-label'>Market Cap: {millify(+crypto.marketCap)}</span>
        <span className='regular-label'>
          Daily Change:{' '}
          <span className={crypto.change < 0 ? `text-red-500` : `text-green-500`}>
            {crypto.change}
          </span>
        </span>
      </div>
    </CardWrapper>
  </Link>
);

export default CryptoCard;
