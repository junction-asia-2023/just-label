import React from 'react';
import ReactDOM from 'react-dom/client';

import AppContainer from './features/app/Container';
import './features/shared/style/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
);
