import clsx from "clsx";
import { ItemCard } from "components";
import { Currency } from "interfaces";
import millify from "millify";
import { useNavigate } from "react-router-dom";

interface CurrencyItemProps {
  currency: Currency;
}

export const CurrencyItem = ({ currency }: CurrencyItemProps) => {
  const navigate = useNavigate();
  const { uuid, rank, name, iconUrl, price, marketCap, change, } = currency

  return (
    <ItemCard
      onClick={() => navigate(`/currencies/${uuid}`)}
    >
      <div className="flex w-full items-center justify-between border-secondary border-b-2 border-solid pb-[16px]">
        <div className="flex gap-[6px]">
          <span>{rank}.</span>
          <span>{name}</span>
        </div>
        <div className="flex h-[30px] w-[30px] items-center justify-center">
          <img src={iconUrl} alt="currency icon" />
        </div>
      </div>
      <div className="flex w-full flex-col gap-[8px] pt-[16px]">
        <span>Price: ${millify(+price)}</span>
        <span>
          Market Cap: ${millify(+marketCap)}
        </span>
        <span>
          Daily Change:
          <span className={clsx({ "text-red-500": +change < 0, "text-green-500": +change > 0 })}>
            {` ${change}`}
          </span>
        </span>
      </div>
    </ItemCard >
  );
};
