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
import { useGetCurrencyQuery } from "api/currencies.api";
import HTMLReactParser from "html-react-parser";
import millify from "millify";
import { useParams } from "react-router-dom";
import CryptoDetailsCard from "../components/CrytpoDetailsCard";
import Loading from "../components/common/Loading";

export const CurrencyPage = () => {
  const { coinId } = useParams();

  const { data, isFetching } = useGetCurrencyQuery(coinId);

  const cryptoDetails = data?.data?.coin;

  const stats = [
    {
      title: "Price in USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <DollarCircleFilled />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <StarFilled /> },
    {
      title: "Market Cap",
      value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`,
      icon: <DollarCircleFilled />,
    },
    {
      title: "All-time-high (daily avg.)",
      value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`,
      icon: <ThunderboltFilled />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <ProjectFilled />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <ProfileFilled />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <CheckOutlined />
      ) : (
        <StopOutlined />
      ),
      icon: <ExclamationCircleFilled />,
    },
    {
      title: "Total Supply",
      value: `${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`,
      icon: <DollarCircleFilled />,
    },
    {
      title: "Circulating Supply",
      value: `${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`,
      icon: <DollarCircleFilled />,
    },
  ];

  if (isFetching) return <Loading />;

  return (
    <div className="min-h-screen min-w-full rounded-[24px] bg-gradient-to-r from-white to-accent-white px-[10px] py-[20px] sm:min-h-full sm:px-[20px] sm:py-[40px]">
      <div className="flex h-full w-full flex-col gap-[20px] sm:mb-[40px] sm:gap-[40px]">
        <div className="flex flex-col gap-[8px] border-secondary border-b-2 border-solid pb-[16px]">
          <div className="flex items-center justify-between">
            <h1 className="w-full text-center sm:w-[auto] sm:text-left">
              {cryptoDetails?.name} ({cryptoDetails?.symbol}) price
            </h1>
            <div>
              <img
                className="max-h-[50px] min-h-[50px] min-w-[50px] max-w-[50px]"
                src={cryptoDetails.iconUrl}
                alt=""
              />
            </div>
          </div>
          <span className="regular-label text-center sm:text-left">
            {cryptoDetails?.name} live price in US dollars. View value
            statistics, market cap and supply.
          </span>
        </div>
        <div className="flex w-full flex-col gap-[16px]">
          <div className="flex w-full flex-col gap-[16px] lg:flex-row">
            <CryptoDetailsCard
              title={`${cryptoDetails?.name} Statistics`}
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
                <h1>What is {cryptoDetails.name}</h1>
                {HTMLReactParser(cryptoDetails.description)}
              </div>
            </div>
          </div>
          <div className="mt-[20px] flex w-full flex-col gap-[16px] rounded-[24px] bg-white p-[16px] shadow-ligh sm:mt-[40px]">
            <h1>Links</h1>
            <div className="flex flex-col gap-[16px]">
              {cryptoDetails.links.map((link: any, i: any) => (
                <div key={i} className="flex w-full justify-between">
                  <span className="regular-label">{link.type}</span>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
