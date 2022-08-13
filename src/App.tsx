import { QueryClient, QueryClientProvider } from 'react-query';
import { Feeds } from './features/feeds/components/Feeds';
import { RegisterForm } from './features/registerForms/components/form';

const queryClient = new QueryClient();

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <RegisterForm />
        <Feeds />
      </QueryClientProvider>
    </div>
  );
}

export default App;
