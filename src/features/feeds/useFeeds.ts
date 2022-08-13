import { useQuery } from 'react-query';

export const useFeeds = () => {
  const { data } = useQuery(['repoData'], () =>
    fetch('/feeds').then(res => res.json())
  );

  return {
    feeds: data.feeds ?? []
  };
};
