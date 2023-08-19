import { FunctionComponent, PropsWithChildren } from 'react';
import '../style/index.scss';

const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="root-container">{children}</div>;
};

export default Layout;
