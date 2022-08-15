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
  },
  {
    id: 3,
    title: 'React – ユーザインターフェース構築のための JavaScript',
    url: 'https://ja.reactjs.org/',
    description:
      'React コンポーネントを作成するには render() メソッドを実装します。このメソッドは、受け取った入力データを元に、表示する内容を返す役割を担'
  },
  {
    id: 4,
    title: 'Haskell - Wikipedia',
    url: 'https://ja.wikipedia.org/wiki/Haskell',
    description:
      'Haskell（ハスケル）は非正格な評価を特徴とする純粋関数型プログラミング言語である。名称は数学者であり論理学者であるハスケル・カリーに由来する。'
  },
  {
    id: 5,
    title: 'Haskell Language',
    url: 'https://www.haskell.org/',
    description:
      'Haskell lends itself well to concurrent programming due to its explicit handling of effects. Its flagship compiler, GHC, comes with a high-performance parallel'
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
  }),
  rest.delete('/feed/:id', (_, res, ctx) => {
    return res(ctx.status(200));
  })
];
