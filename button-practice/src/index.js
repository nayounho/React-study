import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {buttons} from './state/state.json'


const publicURL = process.env.PUBLIC_URL;

const svgURL = fileName => `${publicURL}/assets/icons/${fileName}.svg`;

ReactDOM.render(
  <React.StrictMode>
    {buttons.map(button => <App text={button.text} svgURL={svgURL(button.svgURL)} />)}
  </React.StrictMode>,
  document.getElementById('root')
);