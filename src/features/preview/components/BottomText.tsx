import { FunctionComponent } from 'react';

type BottomTextType = {
  curNum: number;
};

const BottomText: FunctionComponent<BottomTextType> = ({ curNum }) => {
  const titleList = [
    'My Profile',
    'Active Mood',
    'Creating a Schedule',
    'Cancellation',
    'Schedule Notification',
  ];
  const subList = [
    'My basic information is displayed.',
    'Express your day in various ways with text and stickers!',
    'Sends an alert to the ID Card when you create a schedule.',
    'Send a notification to the ID Card when the schedule is canceled.',
    'Sends a notification to the ID Card when the schedule is imminent.',
  ];
  return (
    <div className="preview-bottom-text-container">
      {titleList.map((item, idx) => {
        if (idx === curNum) {
          return (
            <div className="preview-bottom-title-text" key={idx}>
              {item}
            </div>
          );
        }
      })}
      {subList.map((item, idx) => {
        if (idx === curNum) {
          return (
            <div className="preview-bottom-sub-text" key={idx}>
              {item}
            </div>
          );
        }
      })}
    </div>
  );
};

export default BottomText;
