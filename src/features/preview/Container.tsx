import { useAtom } from 'jotai';
import { useLayoutEffect } from 'react';

import { bottomBtnAtom, titleAtom } from '../shared/layout/atom';

import './style/index.scss';

import BottomText from './components/BottomText';
import ChooseType from './components/ChooseType';
import PreviewImage from './components/PreviewImage';
import usePreview from './hooks/usePreview';

const Container = () => {
  const [, setTitle] = useAtom(titleAtom);
  const [, setBottomBtn] = useAtom(bottomBtnAtom);

  const { seletedType, handleTypeClick, curNum, setCurNum } = usePreview();

  useLayoutEffect(() => {
    setTitle({ title: 'CardMe Preview', back: true });
    setBottomBtn({ text: 'Modification' });

    return () => {
      setTitle({});
      setBottomBtn({});
    };
  }, []);

  return (
    <div className="preview-container">
      <ChooseType seletedType={seletedType} handleTypeClick={handleTypeClick} />
      <PreviewImage
        seletedType={seletedType}
        curNum={curNum}
        setCurNum={setCurNum}
      />
      <BottomText curNum={curNum} />
    </div>
  );
};

export default Container;
