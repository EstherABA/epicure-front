import React from 'react';
import spicy from '../../assets/icon/spicy.svg'
import vegetarian from '../../assets/icon/vegetarian.svg'
import vegan from '../../assets/icon/vegan.svg'
import './MeaningOfIcon.css'

const MeaningOfIcon: React.FC = () => {
    return (  
        <>
    <div className='icon-container'>
        <p className='popular-title-container'>THE MEANING OF OUR ICONS:</p>
        <div className='all-icons'>
            <div className='icon'>
            <img src={spicy}/>
            <p>Spicy</p>
            </div>

            <div  className='icon'>
            <img src={vegetarian}/>
            <p>Vegetarian</p>
            </div>

            <div  className='icon'>
            <img src={vegan}/>
            <p>Vegan</p>
            </div>
        </div>
    </div>
    </>
    
    );
}
 
export default MeaningOfIcon;