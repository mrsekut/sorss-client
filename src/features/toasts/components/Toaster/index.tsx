import { useToastInternal } from '../../useToast';

/**
 * TODO:
 * - style
 */
export const Toaster: React.FC = () => {
  const { isOpen, messages } = useToastInternal();

  if (messages == null || !isOpen) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 9999,
        left: 16,
        bottom: 16
      }}
    >
      {messages.type === 'message'
        ? messages.value.map(message => <div>{message}</div>)
        : messages.value}
    </div>
  );
};
