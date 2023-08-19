import { FunctionComponent } from 'react';

import useEventContainer from './hooks/useEventContainer';

import giftLogo from '/svg/gift1.svg';
import giftOpenLogo from '/svg/gift2.svg';
import './event.scss';

const EventContainer: FunctionComponent = () => {
  const { open, handleImageClick } = useEventContainer();
  return (
    <div className="event-container">
      <div className="wrap">
        <div className={`content ${open ? 'open' : ''}`}>
          <span className="label">JUNCTION Event</span>
          <div className="title">
            Who is the lucky one who got the winning gift?
          </div>
        </div>
        <div
          className={`gift ${open ? 'open' : ''}`}
          onClick={handleImageClick}
        >
          <img
            width={open ? '250' : '170'}
            height={open ? '250' : '170'}
            src={open ? giftOpenLogo : giftLogo}
            alt="gift"
          />
        </div>
        <div className={`description`}>
          Press the gift box and check the winning results
        </div>
      </div>
    </div>
  );
};

export default EventContainer;
