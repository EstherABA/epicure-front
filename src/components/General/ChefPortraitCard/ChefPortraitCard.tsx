import * as React from 'react';
import './ChefPortraitCard.css';
import { IChefPortrait } from '../../../Interfaces';


const ChefPortraitCard: React.FC <IChefPortrait> = (props:IChefPortrait ) => {
    return ( 
        <>
        <div className='chef-container'>
            <img className='chef-img' src={props.src} alt={props.alt} />
            <p className='chef-name'> {props.name}</p>
            <div className='delete-btn' onClick={props.onClickDelete}> {props.deleteCardBtn} </div>
        </div>
        <div id={props.idDescription} > {props.description} </div>
        </>
     );
}
 
export default ChefPortraitCard;