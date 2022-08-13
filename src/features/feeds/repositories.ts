import { get } from '../../requests';
import { Feed } from './types';

/**
 * Requests
 * =========================
 */
export const getAllGenres = async (): Promise<Feed[]> => {
  const result = await get<{ feeds: ResFeed[] }>('/feeds');
  return result.feeds;
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
