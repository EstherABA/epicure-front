import data from '../../epicure.json';
import HomeCard from '../General/CardGeneral/CardGeneral';
import './PopularDish.css'
import spicy from '../../assets/icon/spicy.svg'
import React, { useState } from 'react'

const PopularDish: React.FC = () => {
  const dishes = data.dishes.map((dish) => { 
    if (dish.isSignatureDish) {
      return <HomeCard
      class='dishP-card' 
      ImgSrc={require(`../../${dish.image}`)}
      ImgAlt={dish.name}
      name={dish.name} 
      ingredients={dish.ingredients}
      currency = {require('../../assets/icon/ils.svg').default}
      price = {dish.price}
      />
    }
  });

  return ( 
    <>
      <div className='popular-title-container'>SIGNATURE DISH OF: </div>
      <div className='popular-container'>
        {dishes}
      </div>
    </> 
  );
}
 
export default PopularDish;