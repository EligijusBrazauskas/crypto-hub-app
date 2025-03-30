import moment from "moment";
import { NewsItem } from "../interfaces/news.interface";
import { CardWrapper } from "./common/styles/CardWrapper";

interface Props {
  news: NewsItem;
}

const NewsCard = ({ news }: Props) => {
  const contentUrl = news?.image?.thumbnail?.contentUrl;

  return (
    <CardWrapper className="w-full rounded-[24px] shadow-large sm:min-w-[200px] md:min-w-[250px] md:flex-1 lg:min-w-[250px] lg:max-w-[50%]">
      <a href={news.url} target="_blank" rel="noreferrer" className="h-full">
        <div className="items-between flex h-full flex-col justify-between gap-[16px]">
          <div className="flex items-start justify-between gap-[8px]">
            <span className="regular-label">
              {news.name.length > 70
                ? `${news.name.substring(0, 70)}...`
                : news.name}
            </span>
            <div>
              <img
                src={contentUrl}
                alt=""
                className="min-w-[62px] max-w-[62px] rounded-[14px]"
              />
            </div>
          </div>
          <div>
            <span>
              {news.description.length > 100
                ? `${news.description.substring(0, 100)}...`
                : news.description}
            </span>
          </div>
          <div className="flex items-end justify-between gap-[8px]">
            <div className="flex items-end gap-[8px]">
              <img
                className="w-[36px]"
                src={news.provider[0]?.image?.thumbnail?.contentUrl}
                alt=""
              />
              <span className="regular-label">{news.provider[0]?.name}</span>
            </div>
            <span>
              {moment(news.datePublished).startOf("seconds").fromNow()}
            </span>
          </div>
        </div>
      </a>
    </CardWrapper>
  );
};

export default NewsCard;
