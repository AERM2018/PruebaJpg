import React, {Component} from 'react';
import App from '../App.css';

class EdificioF extends Component{
    render(){
        return(
            <div className='EdificioF'>
                <div className='SalonesF1'>
                    <p>Programacion 1</p>
                </div>
                <div className='SalonesF2'>
                    <p className="textorot">Servidor</p>
                </div>
                <div className='SalonesF1'>
                    <p>Programacion 2</p>
                </div>
                <div className='SalonesF2'>
                    <p className="textorot">becas</p>
                </div>
            </div>
        );
    }
}

export default EdificioF;