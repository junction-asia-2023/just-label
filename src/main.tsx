import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import AppContainer from './features/app/Container';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
);
