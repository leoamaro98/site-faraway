import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './Home';
import CanalComunicacao from './Telas/CanalComunicacao/CanalComunicacao';
import Sobre from './Telas/TelaSobre/TelaSobre';
import TelaContato from './Telas/TelaContato/TelaContato';
import TelaServicos from './Telas/TelaServicos/TelaServicos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/canalcomunicacao" exact element={<CanalComunicacao/>} />
    <Route path="/servicos" exact element={<TelaServicos/>} />
    <Route path="/sobre" exact element={<Sobre/>} />
    <Route path="/contato" exact element={<TelaContato/>} />
  </Routes>
</BrowserRouter>
);
