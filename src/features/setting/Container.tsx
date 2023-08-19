import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';

import { titleAtom } from '../shared/layout/atom';

import './style/index.scss';
import PreviewSection from './components/PreviewSection';
import SubmitForm from './components/SubmitForm';

const Container = () => {
  const [, setTitle] = useAtom(titleAtom);

  useLayoutEffect(() => {
    setTitle({ title: 'Active', back: true });
  }, []);

  return (
    <div className="setting-container">
      <PreviewSection />
      <SubmitForm />
    </div>
  );
};

export default Container;
