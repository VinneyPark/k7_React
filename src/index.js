import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //App.js가 생략되어있고, App컴포넌트가 들어옴
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); - 성능평가하는 부분인데 별 필요없어 주석처리.
