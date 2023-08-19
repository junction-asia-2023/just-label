import { useLayoutEffect } from 'react';
import { useAtom } from 'jotai';

import { titleAtom } from '../shared/layout/atom';

import MeetingItem from './components/MeetingItem';
import WeekSelector from './components/WeekSelector';
import './style/index.scss';
import useSchedule from './hooks/useSchedule';

const ScheduleContainer = () => {
  const [, setTitle] = useAtom(titleAtom);
  const { dummyMeetings, handleWeekChange } = useSchedule();

  useLayoutEffect(() => {
    setTitle({ title: 'Schedule', back: true });
  }, []);

  return (
    <div className="schedule-container">
      <WeekSelector onClick={handleWeekChange} />
      {(dummyMeetings || []).map((x, key) => (
        <MeetingItem key={key} {...x} />
      ))}
      {/* <div className="button-area">
        <button type="button">
          <img src={plus} />
          Add Schedule
        </button>
      </div> */}
    </div>
  );
};

export default ScheduleContainer;
