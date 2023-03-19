import React from 'react';
import "./ButtonG.css";
import {IButtonProps} from '../../../Interfaces'


const ButtonG: React.FC<IButtonProps> = (props:IButtonProps) => {
      return (
            <button className={`button ${props.anotherClass}`} onClick={props.onClick}>
                  <p className='btn-title'>{props.title}</p>
                  <img src={props.src} alt={props.alt}/> 
            </button>
      )
}
export default ButtonG;