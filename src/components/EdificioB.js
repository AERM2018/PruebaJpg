import React, {Component} from 'react';
import App from '../App.css';

class EdificioB extends Component{
    render(){
        return(
            <div className='EdificioB'>
                <div className='SalonesB'>
                    <p>Sala de maestros</p>
                </div>
                <div className='SalonesB'>
                    <p>B1</p>
                </div>
                <div className='Baños'>
                    <p>Baños Hombres</p>
                </div>
                <div className='Baños'>
                    <p>Baños Mujeres</p>
                </div>
                
            </div>
        );
    }
}

export default EdificioB;