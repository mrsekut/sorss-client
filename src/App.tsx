import { Feeds } from './features/feeds/components/Feeds';
import { RegisterForm } from './features/registerForms/components/form';

function App() {
  return (
    <div className='App'>
      <RegisterForm />
      <Feeds />
    </div>
  );
}

export default App;
