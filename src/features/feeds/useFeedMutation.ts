import { useCallback } from 'react';
import * as Repository from './repositories';
import { useQueryClient, useMutation } from 'react-query';
import { queryKeys } from './queryKeys';
import { FeedId } from './types';
import { useFeeds } from './useFeeds';

type Args = {
  feedId: FeedId;
};

export const useFeedMutation = () => {
  const queryClient = useQueryClient();
  const { feeds } = useFeeds();

  const { mutate } = useMutation(
    ({ feedId }: Args) => Repository.deleteItem(feedId),
    {
      onSuccess: (_, { feedId }) => {
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
