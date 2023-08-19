import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FunctionComponent } from 'react';

import HomeContainer from '../home/Container';

const queryClient = new QueryClient();

const AppContainer: FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeContainer />
    </QueryClientProvider>
  );
};

export default AppContainer;
