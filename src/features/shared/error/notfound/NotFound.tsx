import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL } from '../../constants/url';
import './notfound.scss';

const NotFound: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleHomeClick = () => navigate(URL.home);

  return (
    <div className="not-found">
      <span>404</span>
      <button onClick={handleHomeClick}>Go Home</button>
    </div>
  );
};

export default NotFound;
