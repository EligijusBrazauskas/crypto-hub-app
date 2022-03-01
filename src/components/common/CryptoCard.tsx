import { Crypto } from "../../shared/models/crypto-model";
import millify from 'millify'
import { CardWrapper } from "./styles/CardWrapper";
import { routes } from "../../shared/router/routes";
import { Link } from "react-router-dom";

interface Props {
  crypto: Crypto
}

const CryptoCard = ({crypto}: Props) => {
	return (
		<Link to={ `${routes.cryptocurrencies}/${crypto.symbol}` } className='shadow-light-blue basis-[100%] md:basis-[48%] lg:basis-[31%] rounded-[24px]'>
			<CardWrapper>
					<div className='flex justify-between items-center w-full border-b-2 border-lightBlue border-solid pb-[16px]'>
						<div className='flex gap-[6px]'>
							<span className="bold-label">{crypto.rank}.</span>
							<span className="bold-label">{crypto.name}</span>
						</div>
						<div className='flex justify-center items-center w-[30px] h-[30px]'>
							<img src={crypto.iconUrl} alt="icon" />
						</div>
					</div>
					<div className='flex flex-col gap-[8px] w-full pt-[16px]'>
						<span className="regular-label">Price: ${millify(+crypto.price)}</span>
						<span className="regular-label">Market Cap: {millify(+crypto.marketCap)}</span>
						<span className="regular-label">Daily Change: <span className={ crypto.change < 0 ? `text-red-500` : `text-green-500`}>{crypto.change}</span></span>
					</div>
			</CardWrapper>
		</Link>
	);
};


export default CryptoCard;
