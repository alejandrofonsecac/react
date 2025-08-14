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

function App() {
    
    const meusItens = ['React', 'Vue', 'Angular', 'Svelte']
  return (
    <div className='App'>
      <h1>Renderização de Listas</h1> 
      <List itens = {meusItens}/>
    </div>
  )

}

export default App;
