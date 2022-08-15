import React from 'react';
import { atom, useRecoilCallback, useRecoilValue } from 'recoil';

/**
 * Exposts
 * =========================
 */
type Value =
  | { type: 'message'; value: string[] }
  | { type: 'component'; value: React.ReactElement };

type Options = {
  duration?: number;
};

const init: Required<Options> = {
  duration: 3000
};

export const useToast = (options?: Options) => {
  const { open } = useToastInternal(options);
  return { open };
};

/**
 * Internal
 * =========================
 */
const isOpenState = atom<boolean>({
  key: 'isOpenToast',
  default: false
});

const messagesState = atom<Value | null>({
  key: 'toastMessage',
  default: null
});

/**
 * TODO:
 * - 連続で消した時の表示
 * - 連続で消した時に、秒数がおかしい
 * - hover時に消えないようにする
 */
export const useToastInternal = (options?: Options) => {
  const o: Required<Options> = { ...init, ...options };
  const isOpen = useRecoilValue(isOpenState);
  const messages = useRecoilValue(messagesState);

  const open = useRecoilCallback(
    ({ set }) =>
      (messages: string[] | React.ReactElement) => {
        set(isOpenState, true);
        if (Array.isArray(messages)) {
          set(messagesState, { type: 'message', value: messages });
        } else {
          set(messagesState, { type: 'component', value: messages });
        }

        setTimeout(() => {
          close();
        }, o.duration);
      },
    []
  );

  const close = useRecoilCallback(
    ({ set, reset }) =>
      () => {
        set(isOpenState, false);
        reset(messagesState);
      },
    []
  );

  return {
    isOpen,
    messages,
    open
  };
};
