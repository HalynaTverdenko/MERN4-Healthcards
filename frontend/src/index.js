import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {IndcardContextProvider} from './context/IndcardContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IndcardContextProvider>
    <App />
    </IndcardContextProvider>
  </React.StrictMode>
);
