import { ItemCard } from "components";
import { News } from "interfaces";
import moment from "moment";

interface NewsItemProps {
  news: News;
}

export const NewsItem = ({ news }: NewsItemProps) => {
  const contentUrl = news?.image?.thumbnail?.contentUrl;

  return (
    <ItemCard>
      <a href={news.url} target="_blank" rel="noreferrer" className="h-full">
        <div className="items-between flex h-full flex-col justify-between gap-[16px]">
          <div className="flex items-start justify-between gap-[8px]">
            <span >
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
              <span >{news.provider[0]?.name}</span>
            </div>
            <span>
              {moment(news.datePublished).startOf("seconds").fromNow()}
            </span>
          </div>
        </div>
      </a>
    </ItemCard>
  );
};
