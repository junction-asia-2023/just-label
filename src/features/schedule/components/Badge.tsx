import { MeetingTypes } from '../type';

const Badge = ({ type }: { type: MeetingTypes }) => {
  return <span className={`badge badge-${type}`}></span>;
};

export default Badge;
