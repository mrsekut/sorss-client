import { useToastInternal } from '../../useToast';

export const Toaster: React.FC = () => {
  const { isOpen, messages } = useToastInternal();

  if (messages.length === 0 || !isOpen) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 9999,
        left: 16,
        bottom: 16,
        pointerEvents: 'none'
      }}
    >
      {messages.map(message => (
        <div>{message}</div>
      ))}
    </div>
  );
};
