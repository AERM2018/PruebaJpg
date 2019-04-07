import React, {Component} from 'react';
import App from '../App.css';

class EdificioM extends Component{
    mostrar = () =>{
        console.log("Hola mundo!!")
    }
    render(){
        return(
            <div className='EdificioM'
                onClick = {this.mostrar}
            >
                <div className='SalonesM'>
                    <p>M1</p>
                </div>
                <div className='SalonesM'>
                    <p>M2</p>
                </div>
                <div className='SalonesM'>
                    <p>M3</p>
                </div>
            </div>
        );
    }
}

export default EdificioM;