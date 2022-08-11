import * as React from 'react';

type Props<T = unknown> = {
  data: T[];
  item: (row: T, index: number) => React.ReactElement;
  empty?: React.ReactElement;
};

export type ListType = <T = unknown>(props: Props<T>) => ReturnType<React.VFC>;

export const List: ListType = ({ item, data, empty }) => {
  if (data.length === 0) {
    return <div>{empty}</div>;
  }

  return <ul>{data.map(item)}</ul>;
};
