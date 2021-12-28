import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import KakaoMap from './service/kakao_map';

const map = new KakaoMap();

ReactDOM.render(
  <React.StrictMode>
    <App map={map} />
  </React.StrictMode>,
  document.getElementById('root')
);
