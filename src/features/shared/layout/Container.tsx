import { FunctionComponent, PropsWithChildren } from 'react';
import './layout.scss';

const LayoutContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <div className="layout-container">{children}</div>;
};

export default LayoutContainer;
