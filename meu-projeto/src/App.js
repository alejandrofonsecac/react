import logo from './logo.svg';
import './App.css'
import HelloWorld from '../src/components/HelloWorld'

function App() {
  let name = 'Gustavo'
  let NewName = name.toUpperCase()
  let url = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.quizur.com%2Fquiz%2Fquao-sigma-voce-e-Rjfh&psig=AOvVaw2GcYJdhuLPyd22wtwziDIu&ust=1752778645218000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPD9srqHwo4DFQAAAAAdAAAAABAE'

  function sum(a, b){
    return a + b
  }
  return (
    <div className='App'>
      <h1>Olá, {NewName}</h1>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt='Sigma Imagem'/>

      <HelloWorld/>
    </div>
  );
}

export default App;
