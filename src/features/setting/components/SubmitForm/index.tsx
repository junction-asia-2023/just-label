import { useAtom } from 'jotai';
import { useEffect } from 'react';

import LayoutBottomBtn from '../../../shared/layout/components/BottomBtn';
import useSetting from '../../hooks/useSetting';
import { activeSaveAtom } from '../../../shared/layout/atom';

import DailySticker from './DailySticker';
import DailyWord from './DailyWord';

const SubmitForm = () => {
  const { handleSubmit, onSubmit } = useSetting();
  const [activeSave] = useAtom(activeSaveAtom);

  useEffect(() => {
    if (activeSave) {
      console.log('touched?');
      handleSubmit(onSubmit);
    }
  }, [activeSave]);

  return (
    <form>
      <DailyWord />
      <DailySticker />
      <LayoutBottomBtn />
    </form>
  );
};

export default SubmitForm;
