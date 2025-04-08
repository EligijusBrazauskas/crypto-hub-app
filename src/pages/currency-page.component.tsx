import {
  CheckOutlined,
  DollarCircleFilled,
  ExclamationCircleFilled,
  ProfileFilled,
  ProjectFilled,
  StarFilled,
  StopOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";
import { useGetCurrencyQuery } from "api/currency.api";
import { PageCard } from "components";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import { useNavigate, useParams } from "react-router-dom";
import CryptoDetailsCard from "../components/CrytpoDetailsCard";
import Loading from "../components/common/Loading";

export const CurrencyPage = () => {
  const { coinId } = useParams();
  const navigate = useNavigate()
  const { data, isFetching, status } = useGetCurrencyQuery({ coinId });
  const coin = data?.data?.coin;

  const stats = [
    {
      title: "Price in USD",
      value: `$ ${coin?.price && millify(+coin?.price)}`,
      icon: <DollarCircleFilled />,
    },
    { title: "Rank", value: coin?.rank, icon: <StarFilled /> },
    {
      title: "Market Cap",
      value: `$ ${coin?.marketCap && millify(+coin?.marketCap)}`,
      icon: <DollarCircleFilled />,
    },
    {
      title: "All-time-high (daily avg.)",
      value: `$ ${coin?.allTimeHigh?.price && millify(+coin?.allTimeHigh?.price)}`,
      icon: <ThunderboltFilled />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coin?.numberOfMarkets,
      icon: <ProjectFilled />,
    },
    {
      title: "Number Of Exchanges",
      value: coin?.numberOfExchanges,
      icon: <ProfileFilled />,
    },
    {
      title: "Aprroved Supply",
      value: coin?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleFilled />,
    },
    {
      title: "Total Supply",
      value: `${coin?.supply?.total && millify(+coin?.supply?.total)}`,
      icon: <DollarCircleFilled />,
    },
    {
      title: "Circulating Supply",
      value: `${coin?.supply?.circulating && millify(+coin?.supply?.circulating)}`,
      icon: <DollarCircleFilled />,
    },
  ];

  if (isFetching) {
    return <Loading />;
  }

  if (status === 'rejected') {
    navigate('/currencies')
  }

  if (!coin) {
    return null
  }

  const { name, symbol, iconUrl, description, links } = coin;

  return (
    <PageCard>
      <div className="flex h-full w-full flex-col gap-[20px] sm:mb-[40px] sm:gap-[40px]">
        <div className="flex flex-col gap-[8px] border-secondary border-b-2 border-solid pb-[16px]">
          <div className="flex items-center justify-between">
            <h1 className="w-full text-center sm:w-[auto] sm:text-left">
              {name} ({symbol}) price
            </h1>
            <div>
              <img
                className="max-h-[50px] min-h-[50px] min-w-[50px] max-w-[50px]"
                src={iconUrl}
                alt={`${name} icon`}
              />
            </div>
          </div>
          <span className="text-center sm:text-left">
            {name} live price in US dollars. View value
            statistics, market cap and supply.
          </span>
        </div>
        <div className="flex w-full flex-col gap-[16px]">
          <div className="flex w-full flex-col gap-[16px] lg:flex-row">
            <CryptoDetailsCard
              title={`${name} Statistics`}
              statsArray={stats}
            />
            <CryptoDetailsCard
              title="General Statistics"
              statsArray={genericStats}
            />
          </div>
          <div className="mt-[20px] sm:mt-[40px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex w-full flex-col gap-[16px] rounded-[24px] bg-white p-[16px] shadow-large">
                <h1>What is {name}</h1>
                {HTMLReactParser(description ?? '')}
              </div>
            </div>
          </div>
          <div className="mt-[20px] flex w-full flex-col gap-[16px] rounded-[24px] bg-white p-[16px] shadow-ligh sm:mt-[40px]">
            <h1>Links</h1>
            <div className="flex flex-col gap-[16px]">
              {links.map(({ type, url, name }, index: number) => (
                <div key={index} className="flex w-full justify-between">
                  <span>{type}</span>
                  <a href={url} target="_blank" rel="noreferrer">
                    {name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageCard >
  );
};
