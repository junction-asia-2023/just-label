import { Suspense } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import LayoutContainer from '../shared/layout/Container';
import HomeContainer from '../home/Container';
import LoginContainer from '../login/Container';
import SettingContainer from '../setting/Container';
import ErrorContainer from '../shared/error/Container';
import NotFound from '../shared/error/notfound/NotFound';
import PreviewContainer from '../preview/Container';
import ScheduleContainer from '../schedule/Container';
import EventContainer from '../event/Container';
import ModalContainer from '../shared/modal/Container';

const router = createRoutesFromElements(
  <Route
    path="/"
    element={
      <Suspense>
        <LayoutContainer />
        <ModalContainer />
      </Suspense>
    }
    errorElement={<ErrorContainer />}
  >
    <Route index element={<HomeContainer />} />
    <Route path="login" element={<LoginContainer />} />
    <Route path="setting" element={<SettingContainer />} />
    <Route path="preview" element={<PreviewContainer />} />
    <Route path="schedule" element={<ScheduleContainer />} />
    <Route path="event" element={<EventContainer />} />
    <Route path="*" element={<NotFound />} />
  </Route>,
);

export default createBrowserRouter(router, {
  basename: '/just-label',
});
