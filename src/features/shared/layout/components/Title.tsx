import { useAtom } from 'jotai';
import { FunctionComponent } from 'react';

import { titleAtom } from '../atom';

import backLogo from '/svg/back.svg';

const LayoutTitle: FunctionComponent = () => {
  const [{ title, back }] = useAtom(titleAtom);

  if (!title) return <div className="layout-title" />;

  return (
    <div className="layout-title under-line">
      <div className="left">
        {back && <img src={backLogo} alt="Back Logo" />}
      </div>
      <div className="title">{title}</div>
      <div className="left" />
    </div>
  );
};

export default LayoutTitle;
