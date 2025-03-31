import { ItemCard } from "components";
import { Article } from "interfaces";
import moment from "moment";

interface NewsItemProps {
  article: Article;
}

export const NewsItem = ({ article }: NewsItemProps) => {
  const { url, title, thumbnail, excerpt, authors, date } = article

  return (
    <ItemCard>
      <a href={url} target="_blank" rel="noreferrer" className="h-full">
        <div className="items-between flex h-full flex-col justify-between gap-[16px]">
          <div className="flex items-start justify-between gap-[8px]">
            <span>
              {title.length > 70
                ? `${title.substring(0, 70)}...`
                : title}
            </span>
            <div>
              <img
                src={thumbnail}
                alt="Article thumbnail"
                className="min-w-[62px] max-w-[62px] rounded-[14px]" />
            </div>
          </div>
          <div>
            <span>
              {excerpt.length > 100
                ? `${excerpt.substring(0, 100)}...`
                : excerpt}
            </span>
          </div>
          <div className="flex items-end justify-between gap-[8px]">
            <div className="flex items-end gap-[8px]">
              <span>Authors: {authors.join(" ")}</span>
            </div>
            <span>
              {moment(date).startOf("seconds").fromNow()}
            </span>
          </div>
        </div>
      </a>
    </ItemCard>
  );
};
