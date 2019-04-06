import React, {Component} from 'react';
import App from '../App.css';

class EdificioC extends Component{
    render(){
        return(
            <div className='EdificioC'>
                <div className='Salones'>
                    <p>D1</p>
                    <p>D5</p>
                </div>
                <div className='Salones'>
                    <p>D2</p>
                    <p>D6</p>
                </div>
                <div className='Salones'>
                    <p>D2</p>
                    <p>D6</p>
                </div>
                <div className='Salones'>
                    <p>D2</p>
                    <p>D6</p>
                </div>
                <div className='Salones'>
                    <p>D2</p>
                    <p>D6</p>
                </div>
                <div className='Escaleras '></div>
            </div>
        );
    }
}

export default EdificioC;