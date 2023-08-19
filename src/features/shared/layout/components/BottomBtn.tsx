import { useAtom } from 'jotai';
import { FunctionComponent } from 'react';

import { activeSaveAtom, bottomBtnAtom } from '../atom';

import addLogo from '/svg/add.svg';

const LayoutBottomBtn: FunctionComponent = () => {
  const [{ text, add }] = useAtom(bottomBtnAtom);
  const [, setActiveSave] = useAtom(activeSaveAtom);

  if (!text) return null;

  return (
    <div className="layout-bottom">
      <div className="layout-bottom-btn" onClick={() => setActiveSave(true)}>
        <div className="left">
          {add && <img src={addLogo} alt="Add Logo" width={20} height={20} />}
        </div>
        <div className="title">{text}</div>
        <div className="left" />
      </div>
    </div>
  );
};

export default LayoutBottomBtn;
