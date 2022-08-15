import { atom, useRecoilCallback, useRecoilValue } from 'recoil';

const isOpenState = atom<boolean>({
  key: 'isOpenToast',
  default: false
});

const messagesState = atom<string[]>({
  key: 'toastMessage',
  default: []
});

type Options = {
  duration?: number;
};

const init: Required<Options> = {
  duration: 2000
};

export const useToastInternal = (options?: Options) => {
  const o: Required<Options> = { ...init, ...options };
  const isOpen = useRecoilValue(isOpenState);
  const messages = useRecoilValue(messagesState);

  const open = useRecoilCallback(
    ({ set }) =>
      (messages: string[]) => {
        set(isOpenState, true);
        set(messagesState, messages);

        setTimeout(() => {
          close();
        }, o.duration);
      },
    []
  );

  const close = useRecoilCallback(
    ({ set }) =>
      () => {
        set(isOpenState, false);
        set(messagesState, []);
      },
    []
  );

  return {
    isOpen,
    messages,
    open
  };
};

/**
 * TODO:
 * - JSXを渡せるようにする
 */
export const useToast = (options?: Options) => {
  const { open } = useToastInternal(options);
  return { open };
};
