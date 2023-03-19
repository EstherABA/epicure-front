import React from 'react';
import {ICard} from '../../../Interfaces';
import LineAroundPrice from '../../../assets/icon/LineAroundPrice.svg'
import "./CardGeneral.css";


const CardGeneral: React.FC<ICard> = (props:ICard) => {
      return (
            <button className= {`card ${props.class}`} onClick={props.onClick}>
                  <img className= "card-image" src={props.ImgSrc} alt={props.ImgAlt}/>
                        
                  <div className='restaurant-name'>{props.name}</div>
                  <div>{props.chefName}</div>
                  <img className='star-img' src={props.moreInfoSrc} alt={props.moreInfoAlt} />
                  <div className='ingredients'> {props.ingredients}</div>
                  <div className='price'> 
                        <img src={props.priceLine} />
                        <div> <img className='currency' src={props.currency}/> {props.price}</div>
                        <img src={props.priceLine} />
                       
                  </div>
                        
            </button>
      )
}

export default CardGeneral;