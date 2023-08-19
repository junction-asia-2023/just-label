import { Meeting } from '../type';

import calendar from '/svg/Calendar.svg';
import clock from '/svg/Clock.svg';
import home from '/svg/Home.svg';
import users from '/svg/Users.svg';

import Badge from './Badge';

const MeetingItem = ({ type, title, date, time, place, people }: Meeting) => {
  return (
    <div className="meeting-item">
      <h2>
        <Badge type={type} />
        {title}
      </h2>
      <p>
        <img src={calendar} />
        {date}
      </p>
      <p>
        <img src={clock} />
        {time}
      </p>
      <p>
        <img src={home} />
        {place}
      </p>
      {people && (
        <p>
          <img src={users} />
          {people}
        </p>
      )}
    </div>
  );
};

export default MeetingItem;
