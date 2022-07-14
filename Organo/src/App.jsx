import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';

function App() {
  const [colaborador, setColaborador] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador);
    setColaborador([...colaborador], colaborador)
  }
  return (
    <div className="App">
      <Banner />
      <Formulario aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
    </div>
  )
}

export default App
