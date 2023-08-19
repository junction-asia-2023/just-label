import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';

import { bottomBtnAtom, titleAtom } from '../shared/layout/atom';

import useSetting from './hooks/useSetting';
import './style/index.scss';
import PreviewSection from './components/PreviewSection';
import SubmitForm from './components/SubmitForm';

const Container = () => {
  const [, setTitle] = useAtom(titleAtom);
  const [, setBottomBtn] = useAtom(bottomBtnAtom);

  const { handlePreviewClick, handleSubmit, onSubmit, register, control } =
    useSetting();

  useLayoutEffect(() => {
    setTitle({ title: 'Active', back: true });
    setBottomBtn({ text: 'Save' });
  }, []);

  return (
    <div className="setting-container">
      <PreviewSection handlePreviewClick={handlePreviewClick} />
      <SubmitForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
        control={control}
      />
    </div>
  );
};

export default Container;
