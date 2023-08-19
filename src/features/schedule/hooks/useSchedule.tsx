import { useState } from 'react';

import { dummy } from '../constants';
import { Meeting } from '../type';

const useSchedule = () => {
  const [dummyMeetings, setDummyMeetings] = useState<Array<Meeting>>([
    ...dummy,
  ]);
  const handleWeekChange = () => {
    setDummyMeetings([
      dummy[Math.floor(Math.random() * 10)],
      dummy[Math.floor(Math.random() * 10)],
      dummy[Math.floor(Math.random() * 10)],
      dummy[Math.floor(Math.random() * 10)],
    ]);
  };
  return { dummyMeetings, handleWeekChange };
};

export default useSchedule;
