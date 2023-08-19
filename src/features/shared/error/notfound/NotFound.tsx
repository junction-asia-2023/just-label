import { FunctionComponent } from 'react';

import './notfound.scss';
import { removeItem } from '../../utils/storage';

const NotFound: FunctionComponent = () => {
  const handleHomeClick = () => {
    removeItem('user');
    window.location.reload();
  };

  return (
    <div className="not-found">
      <span>404</span>
      <button onClick={handleHomeClick}>Go Home</button>
    </div>
  );
};

export default NotFound;
