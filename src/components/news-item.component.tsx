import { ItemCard } from "components";
import { Flex } from "components/base";
import { Article } from "interfaces";
import moment from "moment";

interface NewsItemProps {
  article: Article;
}

export const NewsItem = ({ article }: NewsItemProps) => {
  const {
    url,
    title,
    thumbnail,
    excerpt,
    publisher: { favicon, name },
    date,
  } = article;

  return (
    <a href={url} target="_blank" rel="noreferrer" className="h-full">
      <ItemCard className="gap-4">
        <img
          src={thumbnail}
          alt="Article thumbnail"
          className="h-20 w-full rounded-md object-cover"
        />
        <Flex className="items-between h-full flex-col justify-between gap-4">
          <span className="line-clamp-2 font-semibold">{title}</span>
          <p className="line-clamp-4 text-gray-500">{excerpt}</p>
          <Flex className="items-center justify-between gap-2">
            <Flex className="items-center gap-2">
              <img
                src={favicon}
                alt={`${name} icon`}
                className="h-10 w-10 rounded-md"
              />
              <span className="line-clamp-1 text-xs">{name}</span>
            </Flex>
            <span className="text-xs">
              {moment(date).startOf("seconds").fromNow()}
            </span>
          </Flex>
        </Flex>
      </ItemCard>
    </a>
  );
};
