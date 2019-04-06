import React, {Component} from 'react';
import App from '../App.css';

class EdificioE extends Component{
    render(){
        return(
            <div className='EdificioE'>
                <div className='Salones'>
                    <p>E1</p>
                </div>
                <div className='Salones'>
                    <p>E2</p>
                </div>
                <div className='Salones'>
                    <p>E3</p>
                </div>
                <div className='Salones'>
                    <p>E4</p>
                    <p>E5</p>
                </div>
                <div className='Escaleras '></div>
                
            </div>
        );
    }
}

export default EdificioE;