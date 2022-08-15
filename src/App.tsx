import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { Feeds } from './features/feeds/components/Feeds';
import { RegisterForm } from './features/registerForms/components/form';
import { Toaster } from './features/toasts/components/Toaster';

if (process.env.NODE_ENV === 'development') {
  import('./mocks');
}

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <RegisterForm />
          <Feeds />
          <Toaster />
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
