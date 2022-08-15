import { delete_, get } from '../../requests';
import { Feed, FeedId } from './types';

/**
 * Requests
 * =========================
 */
export const getFeeds = async (): Promise<Feed[]> => {
  const result = await get<{ feeds: ResFeed[] }>('/feeds');
  return result.feeds;
};

export const deleteItem = async (feedId: FeedId): Promise<void> => {
  await delete_<void>(`/feed/${feedId}`);
};

/**
 * Constructors
 * =========================
 */

/**
 * Types
 * =========================
 */
type ResFeed = {
  id: number;
  title: string;
  url: string;
  description: string;
};
