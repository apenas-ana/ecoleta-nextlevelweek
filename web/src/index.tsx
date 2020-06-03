import React from 'react';
import ReactDOM from 'react-dom'; // diz pro React que está sendo utlizado na web
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// DOM é a árvore de elementos do HTML