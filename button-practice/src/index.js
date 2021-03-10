import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

const publicURL = process.env.PUBLIC_URL;

const svgURL = fileName => `${publicURL}/assets/icons/${fileName}.svg`;

ReactDOM.render(
  <React.StrictMode>
    <App text="업로드" svgURL={svgURL('up-arrow')} />
    <App text="업로드 중" svgURL={svgURL('spinner')} />    
  </React.StrictMode>,
  document.getElementById('root')
);