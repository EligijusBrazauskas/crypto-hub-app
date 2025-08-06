import clsx from "clsx";
import { ItemCard } from "components";
import { Flex } from "components/base";
import { Currency } from "interfaces";
import millify from "millify";
import { Link } from "react-router-dom";

interface CurrencyItemProps {
  currency: Currency;
}

export const CurrencyItem = ({ currency }: CurrencyItemProps) => {
  const { uuid, rank, name, iconUrl, price, marketCap, change, } = currency

  return (
    <Link to={`/currencies/${uuid}`}>
      <ItemCard>
        <Flex className="items-center justify-between border-secondary border-b pb-4">
          <Flex className="gap-1.5">
            <span>{rank}.</span>
            <span>{name}</span>
          </Flex>
          <img src={iconUrl} alt="currency icon" width='30px' height="30px" />
        </Flex>
        <Flex className="flex-col gap-2 pt-4">
          <span>Price: ${millify(+price)}</span>
          <span>
            Market Cap: ${millify(+marketCap)}
          </span>
          <Flex className="gap-1.5">
            <span>Daily Change:</span>
            <span className={clsx({ "text-red-500": +change < 0, "text-green-500": +change > 0 })}>
              {change}
            </span>
          </Flex>
        </Flex>
      </ItemCard >
    </Link>
  );
};
