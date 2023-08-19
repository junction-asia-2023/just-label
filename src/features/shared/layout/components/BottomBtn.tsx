import { useAtom } from 'jotai';
import { FunctionComponent } from 'react';

import { activeSaveAtom, bottomBtnAtom } from '../atom';

import addLogo from '/svg/add.svg';

const LayoutBottomBtn: FunctionComponent = () => {
  const [{ text, add, disable }] = useAtom(bottomBtnAtom);
  const [, setActiveSave] = useAtom(activeSaveAtom);

  if (!text) return null;

  return (
    <div className="layout-bottom">
      <button
        className="layout-bottom-btn"
        onClick={() => setActiveSave(true)}
        disabled={disable}
      >
        <div className="left">
          {add && <img src={addLogo} alt="Add Logo" width={20} height={20} />}
        </div>
        <div className="title">{text}</div>
        <div className="left" />
      </button>
    </div>
  );
};

export default LayoutBottomBtn;
