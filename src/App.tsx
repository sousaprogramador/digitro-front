import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppProvider } from './shared/contexts';
import './App.css';

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
