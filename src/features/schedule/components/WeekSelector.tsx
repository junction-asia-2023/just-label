import calendar from '/svg/Calendar.svg';
import arrow from '/svg/Arrow.svg';

const WeekSelector = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="week-selector">
      <img className="arrow arrow-left" src={arrow} onClick={onClick} />
      <h1>
        <img src={calendar} />
        00.00&nbsp;&nbsp;~&nbsp;&nbsp;00.00
      </h1>
      <img className="arrow arrow-right" src={arrow} onClick={onClick} />
    </div>
  );
};

export default WeekSelector;
