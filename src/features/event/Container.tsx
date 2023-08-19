import { FunctionComponent } from 'react';

import useEventContainer from './hooks/useEventContainer';
import './event.scss';

const EventContainer: FunctionComponent = () => {
  useEventContainer();
  return <div className="event-container"></div>;
};

export default EventContainer;
