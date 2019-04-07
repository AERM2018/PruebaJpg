import React, {Component} from 'react';
import App from '../App.css';

class EdificioA extends Component{
    render(){
        return(
            <div className='EdificioA'>
                <div className='SalonesA1'>
                    <p>Oficiona Administrativa</p>
                </div>
                <div className='Escaleras '></div>
                <div className='SalonesA2'>
                    <p>Audiovisual</p>
                </div>
                <div className='SalonesA2'>
                    <p>Biblioteca</p>
                </div>
            </div>
        );
    }
}

export default EdificioA;