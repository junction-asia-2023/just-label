import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FunctionComponent } from 'react';

import Layout from '../shared/components/Layout';
import HomeContainer from '../home/Container';

const queryClient = new QueryClient();

const AppContainer: FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <HomeContainer />
      </Layout>
    </QueryClientProvider>
  );
};

export default AppContainer;
