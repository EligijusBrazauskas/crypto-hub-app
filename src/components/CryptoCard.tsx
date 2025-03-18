import { Route } from "enums";
import millify from "millify";
import { Link } from "react-router-dom";
import { Crypto } from "../shared/models/crypto-model";
import { CardWrapper } from "./common/styles/CardWrapper";

interface Props {
  crypto: Crypto;
}

const CryptoCard = ({ crypto }: Props) => (
  <Link
    to={`${Route.Currencies}/${crypto.uuid}`}
    className="w-full rounded-[24px] shadow-large sm:min-w-[200px] md:min-w-[250px] md:flex-1 lg:min-w-[250px] lg:max-w-[50%]"
  >
    <CardWrapper>
      <div className="flex w-full items-center justify-between border-secondary border-b-2 border-solid pb-[16px]">
        <div className="flex gap-[6px]">
          <span>{crypto.rank}.</span>
          <span>{crypto.name}</span>
        </div>
        <div className="flex h-[30px] w-[30px] items-center justify-center">
          <img src={crypto.iconUrl} alt="icon" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-[8px] pt-[16px]">
        <span className="regular-label">Price: ${millify(+crypto.price)}</span>
        <span className="regular-label">
          Market Cap: {millify(+crypto.marketCap)}
        </span>
        <span className="regular-label">
          Daily Change:{" "}
          <span
            className={crypto.change < 0 ? `text-red-500` : `text-green-500`}
          >
            {crypto.change}
          </span>
        </span>
      </div>
    </CardWrapper>
  </Link>
);

export default CryptoCard;
