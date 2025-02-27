import './App.modules.css';
import { useState } from 'react';


function App() {

  const [inputPeso, setInputPeso] = useState()
  const [inputAltura, setInputAltura] = useState()
  const [botao, setbotao] = useState(false)

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  const erro = 'Digite uma altura/peso válido'
  
  let calculo = (peso, altura) => {
    peso = inputPeso
    altura = inputAltura
    let resultado = peso / (altura * 2)
    if (botao == true && isNumeric(peso) && isNumeric(altura)) {
      return resultado.toFixed(1);
    }
    else {
      return '';
    }
  }

  let informacao = () => {
    let imc = calculo()
    if (botao == false){
      return
    }
    if (imc <= 18.5 && imc >= 1) {
      return <p>Abaixo do Normal</p>
    }
    else if (imc >= 18.6 && imc <= 24.9) {
      return <p>Normal</p>
    }
    else if (imc >= 25.0 && imc <= 29.9) {
      return <p>Sobrepeso</p>
    }
    else if (imc >= 30.0 && imc <= 39.9) {
      return <p>Obesidade I</p>
    }
    else if (imc > 40) {
      return <p>Obesidade II</p>
    }
    else {
      return erro;
    }
  }

  let resetar = () => {
    if (botao == true) {
      window.location.reload()
    }
  }


  return (
   <div>
    <div className='tela'>
      <h1>Calculadora IMC</h1>
      <label>Altura</label>
      <input className='inputAltura' onChange={(e) => setInputAltura(e.target.value)} 
      type='text' maxLength='4' placeholder='Ex: 1.75'/>
      <label>Peso</label>
      <input className='inputPeso' onChange={(e) => setInputPeso(e.target.value)} 
      type='text' maxLength='3' placeholder='Ex: 72'/>

      <button className='botao' onClick={(e) => setbotao(e.target.value=true)}>Calcular</button>
      <button className='botao'onClick={resetar}>Reset</button>

      <div className='resultado'>
        <div className='imc'>
          <label className='imcLabel'>Seu IMC: </label>
          {calculo()}
        </div>
        <div className='classificacao'>
          {informacao()}
        </div>
      </div>
    </div> 
   </div>
  )
}

export default App
