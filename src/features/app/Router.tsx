import { Suspense } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import LayoutContainer from '../shared/layout/Container';
import HomeContainer from '../home/Container';
import LoginContainer from '../login/Container';
import ErrorContainer from '../shared/error/Container';
import NotFound from '../shared/error/notfound/NotFound';

const router = createRoutesFromElements(
  <Route
    path="/"
    element={
      <Suspense>
        <LayoutContainer />
      </Suspense>
    }
    errorElement={<ErrorContainer />}
  >
    <Route index element={<HomeContainer />} />
    <Route path="login" element={<LoginContainer />} />
    <Route path="*" element={<NotFound />} />
  </Route>,
);

export default createBrowserRouter(router);
