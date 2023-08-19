import { FunctionComponent, PropsWithChildren } from 'react';

import './layout.scss';
import useLayout from './hooks/useLayout';

const LayoutContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  useLayout();
  return <div className="layout-container">{children}</div>;
};

export default LayoutContainer;
