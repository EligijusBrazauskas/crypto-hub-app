import moment from 'moment';
import { NewsItem } from '../../shared/models/news-model';
import { CardWrapper } from './styles/CardWrapper';

interface Props {
	news: NewsItem;
}

const NewsCard = ({ news }: Props) => {
	const contentUrl = news?.image?.thumbnail?.contentUrl;

	return (
		<CardWrapper className='shadow-light-blue rounded-[24px] basis-[100%] md:basis-[48%] xl:basis-[31%]'>
			<a
				href={news.url}
				target='_blank'
				rel='noreferrer'
			>
				<div className='flex flex-col gap-[16px] justify-between'>
					<div className='flex gap-[8px] justify-between items-start'>
						<span className='regular-label'>{news.name}</span>
						<div>
							<img
								src={contentUrl}
								alt=''
								className='rounded-[14px] min-w-[62px] max-w-[62px]'
							/>
						</div>
					</div>
					<div>
						<span className='light-label'>
							{news.description.length > 100
								? `${news.description.substring(0, 100)}...`
								: news.description}{' '}
						</span>
					</div>
          <div className='flex justify-between items-end gap-[8px]'>
            <div className='flex items-end gap-[8px]'>
              <img className='w-[36px]' src={news.provider[0]?.image?.thumbnail?.contentUrl} alt="" />
              <span className='regular-label'>{news.provider[0]?.name}</span>
            </div>
            <span className='light-label'>{moment(news.datePublished).startOf('seconds').fromNow()}</span>
          </div>
				</div>
			</a>
		</CardWrapper>
	);
};

export default NewsCard;
