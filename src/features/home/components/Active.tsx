import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import activeLogo from '/svg/active.svg';
import rightIcon from '/svg/right.svg';

import { URL } from '../../shared/constants/url';

const Active: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleActiveClick = () => navigate(URL.setting);

  return (
    <section className="active-box" onClick={handleActiveClick}>
      <div className="icon-box">
        <img className="icon" src={activeLogo} alt="active icon" />
      </div>
      <div className="content">
        <div className="title">Active</div>
        <div className="description">Expressing myself</div>
      </div>
      <div className="next">
        <img className="next-icon" src={rightIcon} alt="next" />
      </div>
    </section>
  );
};

export default Active;
