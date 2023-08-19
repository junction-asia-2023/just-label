import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import rightIcon from '/svg/right.svg';
import eventIcon from '/svg/event.svg';

import { URL } from '../../shared/constants/url';

const Event: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleEventClick = () => navigate(URL.event);

  return (
    <section className="preview-box" onClick={handleEventClick}>
      <div className="icon-box">
        <img className="icon" src={eventIcon} alt="event icon" />
      </div>
      <div className="content">
        <div className="title">Event</div>
      </div>
      <div>
        <img src={rightIcon} alt="next" />
      </div>
    </section>
  );
};

export default Event;
