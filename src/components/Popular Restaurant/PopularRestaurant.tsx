import React from 'react';
import HomeCard from '../General/CardGeneral/CardGeneral';
import data from '../../epicure.json'
import { useSelector } from 'react-redux';
import { IRestaurant } from '../../Interfaces';
import { RootState } from '../../store/Store'; 
import "./PopularRestaurant.css"
import ButtonG from '../General/ButtonGeneral/ButtonG';



const PopularRestaurant: React.FC = () => {
  const allRestaurants = useSelector(
    (state:RootState) => state.restaurants.value
  );
  const restaurantPopular = allRestaurants.map((restaurant:IRestaurant) => { 

    if (restaurant.isPopular === true) {
      return <HomeCard 
        class='restaurantP-card'
        ImgSrc={require(`../../${restaurant.image}`)} 
        name={restaurant.name} 
        ImgAlt={restaurant.name}  
        chefName={restaurant.chefName} 
        moreInfoSrc={require(`../../assets/icon/star${restaurant.rating}.svg`)}
      />
    }
      return null;
  }
  );


  return (
    <>
      <div className='popular-title-container'>POPULAR RESTAURANT IN EPICURE:</div>
      <div className='popular-container'>
        {restaurantPopular}
      </div>
      <ButtonG  anotherClass='all-restaurant-btn' src={require(`../../assets/AllRestaurant.svg`).default}/>
    </>
  )

}
export default PopularRestaurant;
