import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import './layout.scss';
import useLayout from './hooks/useLayout';

const LayoutContainer: FunctionComponent = () => {
  useLayout();
  return (
    <div className="layout-container">
      <Outlet />
    </div>
  );
};

export default LayoutContainer;
