import { useCallback } from 'react';
import * as Repository from './repositories';
import { useQueryClient, useMutation } from 'react-query';
import { queryKeys } from './queryKeys';
import { FeedId } from './types';
import { useFeeds } from './useFeeds';
import { useToast } from '../toasts/useToast';

type Args = {
  feedId: FeedId;
};

/**
 * TODO:
 * - rollback
 */
export const useFeedMutation = () => {
  const queryClient = useQueryClient();
  const { feeds } = useFeeds();
  const { open } = useToast();

  const { mutate } = useMutation(
    ({ feedId }: Args) => Repository.deleteItem(feedId),
    {
      onSuccess: (_, { feedId }) => {
        open(
          <div>
            削除しました。
            <button onClick={() => console.log('rollback')}>取り消す</button>
          </div>
        );
        queryClient.setQueriesData(
          queryKeys.feeds(),
          feeds.filter(feed => feed.id !== feedId)
        );
      }
    }
  );

  const deleteItem = useCallback((feedId: FeedId) => {
    mutate({ feedId });
  }, []);

  return {
    deleteItem
  };
};
