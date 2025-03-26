import { useState } from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import './global.css'
import './App.css'

function App() {
  const [imc, setImc] = useState(null);

  return (
    <div className='container'>
      <h1>Calculadora de IMC</h1>
      <Formulario setImc={setImc} />
      {imc && <Resultado imc={imc} />}
    </div>
  );
}

export default App
