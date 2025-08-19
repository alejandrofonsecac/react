import React, { useState } from 'react';

import logo from './logo.svg';
import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SaMyName';
import Person from './components/person';
import ListCar from './components/ListCar';
import Event from './components/Event';
import Form from './components/Form';
import Condicional from './components/Condicional';

import List from './components/RenderList/List';

import SeuNome from './components/StateLift/SeuNome';
import Saudacao from './components/StateLift/Saudacao';

function App() {

  const [nome, setNome] = useState('');
    
  return (
    <>
      <h1>State Lift</h1>    
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome}/>
    </>    
  )

}

export default App;
