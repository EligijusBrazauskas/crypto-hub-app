import { useGetCurrencyQuery } from "api/currency.api";
import { CryptoDetailsCard, PageCard } from "components";
import { Flex } from "components/base";
import { FallbackText, Spinner } from "components/common";
import { genericStatsDefault, statsDefault } from "defaults";
import HTMLReactParser from "html-react-parser";
import { useNavigate, useParams } from "react-router-dom";

export const CurrencyPage = () => {
  const { coinId } = useParams();
  const navigate = useNavigate();
  const { data, status, isFetching } = useGetCurrencyQuery({ coinId });
  const coin = data?.data?.coin;

  if (status === "rejected") {
    navigate("/currencies");
  }

  return (
    <PageCard>
      <Spinner isLoading={isFetching} className="flex flex-col gap-10">
        <Flex className="flex-col gap-2 border-secondary border-b-2 border-solid pb-4">
          <Flex className="items-center justify-between">
            <h1 className="w-full text-center sm:w-auto sm:text-left">
              <FallbackText>{`${coin?.name} (${coin?.symbol}) price`}</FallbackText>
            </h1>
            <img
              width={50}
              height={50}
              src={coin?.iconUrl}
              alt={`${coin?.name} icon`}
            />
          </Flex>
          <span className="text-center text-sm sm:text-left">
            {coin?.name} live price in US dollars. View value statistics, market
            cap and supply.
          </span>
        </Flex>
        <Flex className="w-full flex-col gap-4 lg:flex-row">
          <CryptoDetailsCard>
            <h2 className="text-center sm:text-left">{`${coin?.name} Statistics`}</h2>
            <Flex className="flex-col gap-4">
              {statsDefault(coin).map(({ icon, title, value }, i) => (
                <Flex key={i} className="w-full justify-between">
                  <Flex className="items-center gap-2 text-secondary-ocean">
                    {icon}
                    <span>{title}</span>
                  </Flex>
                  <span>{value}</span>
                </Flex>
              ))}
            </Flex>
          </CryptoDetailsCard>
          <CryptoDetailsCard>
            <h2 className="text-center sm:text-left">General Statistics</h2>
            <Flex className="flex-col gap-4">
              {genericStatsDefault(coin).map(({ icon, title, value }, i) => (
                <Flex key={i} className="w-full justify-between">
                  <Flex className="items-center gap-2 text-secondary-ocean">
                    {icon}
                    <span>{title}</span>
                  </Flex>
                  <span>{value}</span>
                </Flex>
              ))}
            </Flex>
          </CryptoDetailsCard>
        </Flex>
        <Flex className="w-full flex-col gap-4 rounded-xl bg-white p-4 text-center shadow-large sm:text-left">
          <h2>What is {coin?.name}?</h2>
          {HTMLReactParser(coin?.description ?? "")}
        </Flex>
        <Flex className="w-full flex-col gap-4 rounded-xl bg-white p-4 shadow-large">
          <h2>Links</h2>
          <Flex className="flex-col gap-4">
            {coin?.links.map(({ type, url, name }, index: number) => (
              <Flex key={index} className="w-full justify-between">
                <span>{type}</span>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary-ocean"
                >
                  {name}
                </a>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Spinner>
    </PageCard>
  );
};
