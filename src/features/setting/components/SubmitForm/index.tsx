import { useAtom } from 'jotai';
import { FunctionComponent, useEffect, useRef } from 'react';
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
  const [activeSave, setActiveSave] = useAtom(activeSaveAtom);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!activeSave) return;
    setActiveSave(false);
    inputRef.current?.click();
  }, [activeSave]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DailyWord register={register} />
      <DailySticker control={control} />
      <input ref={inputRef} type="submit" style={{ visibility: 'hidden' }} />
    </form>
  );
};

export default SubmitForm;
