import React from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      </BrowserRouter>
  </React.StrictMode>
);
