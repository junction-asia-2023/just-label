import dayjs from 'dayjs';

import calendar from '/svg/Calendar.svg';
import arrow from '/svg/Arrow.svg';

import { useState } from 'react';

const WeekSelector = ({ onClick }: { onClick: () => void }) => {
  const [startDate, setStartDate] = useState(dayjs(new Date()));

  const handleLeftArrowClick = () => {
    setStartDate(startDate.add(-8, 'day'));
    onClick();
  };
  const handleRightArrowClick = () => {
    setStartDate(startDate.add(8, 'day'));
    onClick();
  };

  return (
    <div className="week-selector">
      <img
        className="arrow arrow-left"
        src={arrow}
        onClick={handleLeftArrowClick}
      />
      <h1>
        <img src={calendar} />
        {startDate.format('MM.DD')}&nbsp;&nbsp;~&nbsp;&nbsp;
        {startDate.add(7, 'day').format('MM.DD')}
      </h1>
      <img
        className="arrow arrow-right"
        src={arrow}
        onClick={handleRightArrowClick}
      />
    </div>
  );
};

export default WeekSelector;
