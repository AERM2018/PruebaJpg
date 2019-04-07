import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import EdificioG from './components/EdificioG'
import Cafteria from './components/Cafeteria'
import EdificioD from './components/EdificioD'
import EdificioC from './components/EdificioC'
import EdificioB from './components/EdificioB'
import EdificioE from './components/EdificioE'
import EdificioM from './components/EdificioM'
import EdificioF from './components/EdificioF'
import EdificioA from './components/EdificioA'
class App extends Component {
  render() {
    return (
      <div className="App">
        <EdificioG/>
        <Cafteria/>
        <EdificioD/>
        <EdificioC/>
        <EdificioB/>
        <EdificioE/>
        <EdificioM/>
        <EdificioF/>
        <EdificioA/>
      </div>
    );
  }
}

export default App;
