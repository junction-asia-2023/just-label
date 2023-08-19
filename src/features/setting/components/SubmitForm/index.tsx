import { useAtom } from 'jotai';
import { FunctionComponent, useEffect } from 'react';
import {
  UseFormHandleSubmit,
  SubmitHandler,
  UseFormRegister,
  Control,
} from 'react-hook-form';

import { activeSaveAtom } from '../../../shared/layout/atom';
import { Inputs } from '../../types';

import DailySticker from './DailySticker';
import DailyWord from './DailyWord';

type SubmitFormProps = {
  handleSubmit: UseFormHandleSubmit<Inputs, undefined>;
  onSubmit: SubmitHandler<Inputs>;
  register: UseFormRegister<Inputs>;
  control: Control<Inputs, any>;
};

const SubmitForm: FunctionComponent<SubmitFormProps> = ({
  handleSubmit,
  onSubmit,
  register,
  control,
}) => {
  const [activeSave] = useAtom(activeSaveAtom);

  useEffect(() => {
    if (activeSave) {
      console.log('touched?');
      handleSubmit(onSubmit);
    }
  }, [activeSave]);

  return (
    <form>
      <DailyWord register={register} />
      <DailySticker control={control} />
    </form>
  );
};

export default SubmitForm;
