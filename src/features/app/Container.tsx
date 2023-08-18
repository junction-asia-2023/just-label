import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import HomeContainer from '../home/Container';

const queryClient = new QueryClient();

const AppContainer = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeContainer />
    </QueryClientProvider>
  );
};

export default AppContainer;
