import { useQuery } from 'react-query';
import { queryKeys } from './queryKeys';
import * as Repository from './repositories';

export const useFeeds = () => {
  const { data } = useQuery(queryKeys.feeds(), Repository.getFeeds, {
    staleTime: Infinity,
    notifyOnChangeProps: 'tracked'
  });

  return {
    feeds: data ?? []
  };
};
