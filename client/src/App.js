import React, { Component } from 'react'
import Resumen from './resumen.js'
import ListaJob from './jobsList.js'





class App extends Component {

  
  render() {

    
    return(
      <Resumen />,
      <ListaJob />
      );
	}
}

export default App;
