import { useAtom } from 'jotai';
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { activeSaveAtom, bottomBtnAtom } from '../atom';

import addLogo from '/svg/add.svg';

import { URL } from '../../constants/url';

const LayoutBottomBtn: FunctionComponent = () => {
  const [{ text, add, disable }] = useAtom(bottomBtnAtom);
  const [, setActiveSave] = useAtom(activeSaveAtom);
  const navigate = useNavigate();

  const handleBtnClick = () => {
    if (text === 'Edit') {
      navigate(URL.setting);
    } else if (text === 'Save') {
      setActiveSave(true);
    }
  };

  if (!text) return null;

  return (
    <div className="layout-bottom">
      <button
        className="layout-bottom-btn"
        onClick={handleBtnClick}
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
