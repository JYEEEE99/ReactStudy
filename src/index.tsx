import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Name from './components/Name';
import Parent1 from './components/ContainerSample1';
import Parent2 from './components/ContainerSample2';
import Parent3 from './components/ContainerSample3';
import Page from './components/ContextSample';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Hello />
    <Name />
    <Parent1 />
    <Parent2 />
    <Parent3 />
    <Page />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
