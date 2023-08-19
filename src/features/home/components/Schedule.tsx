import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import rightIcon from '/svg/right.svg';
import scheduleIcon from '/svg/schedule.svg';

import { URL } from '../../shared/constants/url';

const Schedule: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleScheduleClick = () => navigate(URL.schedule);

  return (
    <section className="preview-box" onClick={handleScheduleClick}>
      <div className="icon-box">
        <img className="icon" src={scheduleIcon} alt="schedule icon" />
      </div>
      <div className="content">
        <div className="title">Schedule</div>
      </div>
      <div>
        <img src={rightIcon} alt="next" />
      </div>
    </section>
  );
};

export default Schedule;
