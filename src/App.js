import React from 'react';
import './App.css';
import Entrada from './Componentes/Entrada';
import Resultado from './Componentes/Resultado';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Entrada: 0,
      Resultado: 0,
      Boton: 37
      
    }
  }

  calcularesultado = (event) => {
    //console.log(event.target.value);
    let total = event.target.value*this.state.Boton;
    this.setState({
      Resultado: total,
      Entrada: event.target.value
    })
  }

cambiamultiplicacion = (numero) => {
  let result = this.state.Entrada*numero;
  this.setState({
    Boton: numero,
    Resultado: result
  })
}
  
  render() {
    return (
      <div>
        <p>Esta pulsado el boton X{this.state.Boton} </p>
        <Entrada cambiando = {this.calcularesultado} />

        <button onClick={() => this.cambiamultiplicacion(37)}>Multiplica por 37</button>
        <button onClick={() => this.cambiamultiplicacion(43)}>Multiplica por 43</button>

        <Resultado valor = {this.state.Resultado}/>
        

      </div>

    );

  }
}

export default App;
