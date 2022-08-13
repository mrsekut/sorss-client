import { rest } from 'msw';
import { Feed } from './types';

const feeds: Feed[] = [
  {
    id: 1,
    title: 'はじめに | vite',
    url: 'https://ja.vitejs.dev/guide/',
    description:
      'はじめに #. 概要 #. Vite（フランス語で「素早い」という意味の単語で '
  },
  {
    id: 2,
    title: 'プラグイン API | Vite',
    url: 'https://ja.vitejs.dev/guide/api-plugin.html',
    description:
      'エコシステム内の他のプラグインとの衝突を避けるために、可能であればプラグイン名を名前空間として使用すべきです。例えば、 vite-plugin-posts'
  }
];

export const handlers = [
  rest.get('/feeds', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        feeds
      })
    );
  })
];
