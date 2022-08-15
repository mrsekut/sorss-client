import { List } from '../../../../components/List';
import { useFeeds } from '../../useFeeds';
import { FeedItem } from '../FeedItem';

export const Feeds: React.FC = () => {
  const { feeds } = useFeeds();

  return (
    <div>
      <List
        data={feeds}
        item={feed => (
          <li key={feed.id}>
            <FeedItem
              feedId={feed.id}
              title={feed.title}
              description={feed.description}
              url={feed.url}
            />
          </li>
        )}
      />
    </div>
  );
};
