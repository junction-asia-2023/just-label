import { FunctionComponent } from 'react';

import useEventContainer from './hooks/useEventContainer';

const EventContainer: FunctionComponent = () => {
  useEventContainer();
  return <div></div>;
};

export default EventContainer;
