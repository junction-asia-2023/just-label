import { FunctionComponent, PropsWithChildren } from 'react';
import '../style/index.scss';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="layout-container">{children}</div>;
};

export default Layout;
