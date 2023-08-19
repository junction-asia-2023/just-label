import { FunctionComponent } from 'react';
import { UseFormRegister } from 'react-hook-form';

import { Inputs } from '../../types';
import { wordTitleText } from '../../constants';
import '../../style/index.scss';

type DailyWordProps = {
  register: UseFormRegister<Inputs>;
};

const DailyWord: FunctionComponent<DailyWordProps> = ({ register }) => {
  return (
    <div className="setting-word-container">
      <span className="setting-word-title">{wordTitleText}</span>
      <input
        className="setting-word-input"
        placeholder="Please write a word to describe you."
        {...register('comment', { required: true })}
      />
    </div>
  );
};

export default DailyWord;
