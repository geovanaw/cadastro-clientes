import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CadastroClientes from './Cadastro';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CadastroClientes />
  </React.StrictMode>
);

reportWebVitals();
