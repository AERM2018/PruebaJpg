import React, {Component} from 'react';
import App from '../App.css';

class EdificioC extends Component{
    render(){
        return(
            <div className='EdificioC'>
                <div className='Salones'>
                    <p>C1</p>
                </div>
                <div className='Salones'>
                    <p>C2</p>
                </div>
                <div className='Salones'>
                    <p>C3</p>
                </div>
                <div className='Salones'>
                    <p>C4</p>
                    <p>C6</p>
                </div>
                <div className='Escaleras '></div>
                <div className='Salones'>
                    <p>C5</p>
                </div>
                
            </div>
        );
    }
}

export default EdificioC;