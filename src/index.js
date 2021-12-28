import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import DefStation from './service/def_station';

const defStation = new DefStation();

ReactDOM.render(
  <React.StrictMode>
    <App defStation={defStation} />
  </React.StrictMode>,
  document.getElementById('root')
);
