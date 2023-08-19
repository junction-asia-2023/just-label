import { useAtom } from 'jotai';
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { titleAtom } from '../atom';

import backLogo from '/svg/back.svg';

const LayoutTitle: FunctionComponent = () => {
  const [{ title, back }] = useAtom(titleAtom);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!title) return <div className="layout-title" />;

  return (
    <div className="layout-title under-line">
      <div className="left">
        {back && (
          <img src={backLogo} alt="Back Logo" onClick={handleBackClick} />
        )}
      </div>
      <div className="title">{title}</div>
      <div className="left" />
    </div>
  );
};

export default LayoutTitle;
