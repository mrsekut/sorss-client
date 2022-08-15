import { FeedId } from '../../types';
import { useFeedMutation } from '../../useFeedMutation';

type Props = {
  feedId: FeedId;
  title: string;
  url: string;
  description: string;
};

export const FeedItem: React.FC<Props> = ({
  feedId,
  title,
  url,
  description
}) => {
  const { deleteItem } = useFeedMutation();

  return (
    <div>
      <a href={url}>{title}</a>
      <button onClick={() => deleteItem(feedId)}>delete</button>
      <p>{description}</p>
    </div>
  );
};
