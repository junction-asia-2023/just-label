import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from '@tanstack/react-query';
import { FunctionComponent } from 'react';
import { RouterProvider } from 'react-router-dom';

import Router from './Router';

const queryClient = new QueryClient();

const AppContainer: FunctionComponent = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryErrorResetBoundary>
        <RouterProvider router={Router} />
      </QueryErrorResetBoundary>
    </QueryClientProvider>
  );
};

export default AppContainer;
