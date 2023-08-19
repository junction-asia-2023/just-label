import { wordTitleText } from '../../constants';
import useSetting from '../../hooks/useSetting';
import '../../style/index.scss';

const DailyWord = () => {
  const { register } = useSetting();
  return (
    <div className="setting-word-container">
      <span className="setting-word-title">{wordTitleText}</span>
      <input className="setting-word-input" {...register('comment')} />
    </div>
  );
};

export default DailyWord;
