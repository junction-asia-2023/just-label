import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FunctionComponent } from 'react';

import LayoutContainer from '../shared/layout/Container';
import HomeContainer from '../home/Container';

const queryClient = new QueryClient();

const AppContainer: FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutContainer>
        <HomeContainer />
      </LayoutContainer>
    </QueryClientProvider>
  );
};

export default AppContainer;
