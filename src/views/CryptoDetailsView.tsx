import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { useGetCryptoDetailsQuery } from "../shared/services/cryptoAPI";
import { CheckOutlined, DollarCircleFilled, ExclamationCircleFilled, ExclamationCircleOutlined, ExclamationOutlined, ProfileFilled, ProjectFilled, StarFilled, StopOutlined, ThunderboltFilled } from "@ant-design/icons";
import Loading from "../components/common/Loading";
import CryptoDetailsCard from "../components/CrytpoDetailsCard";

const CryptoDetailsView = () => {

  const {coinId} = useParams();

  const {data, isFetching} = useGetCryptoDetailsQuery(coinId);

  const cryptoDetails = data?.data?.coin;

  const stats = [
    { title: 'Price in USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleFilled/> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <StarFilled /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleFilled /> },
    { title: 'All-time-high (daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <ThunderboltFilled /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <ProjectFilled /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <ProfileFilled /> },
    { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleFilled /> },
    { title: 'Total Supply', value: `${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <DollarCircleFilled /> },
    { title: 'Circulating Supply', value: `${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <DollarCircleFilled /> },
  ];

  if (isFetching) return <Loading />;

  return (
    <div className='min-w-full h-full bg-gradient-to-r from-white to-nearlyWhite rounded-[24px] py-[20px] sm:py-[40px] px-[10px] sm:px-[20px]'>
      <div className='flex flex-col gap-[20px] sm:gap-[40px] sm:mb-[40px] h-full w-full'>
        <div className="flex flex-col gap-[8px] pb-[16px] border-b-2 border-lightBlue border-solid">
          <div className="flex items-center justify-between">
            <h1 className='text-center w-full sm:text-left sm:w-[auto]'>{cryptoDetails?.name} ({cryptoDetails?.symbol}) price</h1>
            <div>
              <img className="min-w-[50px] max-w-[50px] min-h-[50px] max-h-[50px]" src={cryptoDetails.iconUrl} alt="" />
            </div>
          </div>
          <span className="regular-label text-center sm:text-left">{cryptoDetails?.name} live price in US dollars. View value statistics, market cap and supply.</span>
        </div>
        <div className='flex flex-col gap-[16px] w-full'>
          <div className="flex flex-col md:flex-row gap-[16px] w-full">
            <CryptoDetailsCard title={`${cryptoDetails?.name} Statistics`} statsArray={stats}/>
            <CryptoDetailsCard title='General Statistics' statsArray={genericStats}/>
          </div>
          <div className="mt-[20px] sm:mt-[40px]">
            <div className="flex flex-col gap-[16px]">
              <div className="w-full flex flex-col gap-[16px] bg-white p-[16px] rounded-[24px] shadow-light-blue">
                <h1>What is {cryptoDetails.name}</h1>
                  {HTMLReactParser(cryptoDetails.description)}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-[16px] bg-white p-[16px] rounded-[24px] shadow-light-blue mt-[20px] sm:mt-[40px]">
            <h1>Links</h1>
            <div className="flex flex-col gap-[16px]">
              {
                cryptoDetails.links.map((link: any) => (
                  <div key={link.name} className="flex justify-between w-full">
                    <span className="regular-label">{link.type}</span>
                    <a className='label-blue' href={link.url} target='_blank' rel='noreferrer'>{link.name}</a>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoDetailsView;