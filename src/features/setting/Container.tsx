import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';

import { bottomBtnAtom, titleAtom } from '../shared/layout/atom';

import './style/index.scss';
import PreviewSection from './components/PreviewSection';
import SubmitForm from './components/SubmitForm';

const Container = () => {
  const [, setTitle] = useAtom(titleAtom);
  const [, setBottomBtn] = useAtom(bottomBtnAtom);
  useLayoutEffect(() => {
    setTitle({ title: 'Active', back: true });
  }, []);

  useLayoutEffect(() => {
    setBottomBtn({ text: 'Save' });
  }, []);

  return (
    <div className="setting-container">
      <PreviewSection />
      <SubmitForm />
    </div>
  );
};

export default Container;
