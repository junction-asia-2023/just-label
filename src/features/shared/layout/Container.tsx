import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';

import './layout.scss';
import useLayout from './hooks/useLayout';
import LayoutTitle from './components/Title';
import LayoutBottomBtn from './components/BottomBtn';

const LayoutContainer: FunctionComponent = () => {
  useLayout();
  return (
    <div className="layout-container">
      <LayoutTitle />
      <Outlet />
      <LayoutBottomBtn />
    </div>
  );
};

export default LayoutContainer;
