import { useState } from "react";
import Select, { SingleValue } from "react-select";
import Loading from "../../components/common/Loading";
import MessageCard from "../../components/common/MessageCard";
import NewsCard from "../../components/common/NewsCard";
import { useGetCryptosQuery } from "../../services/cryptoAPI";
import { useGetNewsQuery } from "../../services/newsApi";
import { Crypto } from "../../shared/models/crypto-model";
import { NewsItem } from "../../shared/models/news-model";
import { MehFilled } from '@ant-design/icons';

type MyOption = { value: string , label: string };

const NewsView = () => {

const [activeFilter, setActiveFilter] = useState<SingleValue<MyOption> | MyOption>({ value: 'all', label: 'cryptocurrency' });

const cryptosCount = 100;
const newsCount = 20;

const { data: cryptos, isFetching: isFetchingCryptos } = useGetCryptosQuery(cryptosCount)
const { data: news, isFetching: isFetchingNews } = useGetNewsQuery({ category: activeFilter?.value, count: newsCount })

const newsList = news?.value;
const cryptosList = cryptos?.data?.coins

const getOptions = (): MyOption[] => {
  const symbolOptions = cryptosList.map((crypto: Crypto) => {
    return { value: `${crypto.name} crypto`, label: crypto.symbol };
  });

  return [{ value: 'cryptocurrency', label: 'ALL' }, ...symbolOptions]
}


  return (
    <div className='min-w-full h-full bg-gradient-to-r from-white to-nearlyWhite rounded-[24px] py-[40px] px-[20px]'>
      <div className='flex flex-col gap-[40px] h-full'>
				<div className='flex justify-between items-center'>
					<h1>News</h1>
          {
            !isFetchingCryptos &&
            <Select className='w-[150px] text-secondary' options={getOptions()} onChange={setActiveFilter} placeholder='Select Category' isSearchable/>
          }
				</div>
        <div className="h-full w-full">
          {
            isFetchingCryptos || isFetchingNews ? <Loading /> :
            <div className='flex gap-[16px] w-full flex-wrap'>
              {newsList?.map((news: NewsItem, index: any) => {
                return <NewsCard news={news} key={index} />
              })}
            </div>
          }
          {
            newsList?.length === 0 &&
            <MessageCard text='No results were found for selected cryptocurrency' />
          }
        </div>
			</div>
    </div>
  )
}

export default NewsView;