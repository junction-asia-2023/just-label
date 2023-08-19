import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';

import { bottomBtnAtom, titleAtom } from '../shared/layout/atom';

import './style/index.scss';

import BottomText from './components/BottomText';
import LabelSender from './components/LabelSender';
import ChooseType from './components/ChooseType';
import PreviewImage from './components/PreviewImage';

const Container = () => {
  const [, setTitle] = useAtom(titleAtom);
  const [, setBottomBtn] = useAtom(bottomBtnAtom);
  useLayoutEffect(() => {
    setTitle({ title: 'CardMe Preview', back: true });
    setBottomBtn({ text: 'Modification' });
  }, []);

  return (
    <div className="preview-container">
      <ChooseType />
      <PreviewImage />
      <BottomText />
      <LabelSender>.</LabelSender>
    </div>
  );
};

export default Container;
