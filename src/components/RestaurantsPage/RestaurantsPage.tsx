import React from 'react';
// import data from '../../epicure.json';
import './RestaurantsPage.css'
import CardGeneral from '../General/CardGeneral/CardGeneral';
import NavBar from '../General/NavBar/NavBar';
import FilterBarByNew from '../General/FilterBarByNew/FIlterBarByNew';
import FilterBarByPrice from '../General/FilterBarByPrice/FilterBarByPrice'
import Footer from '../General/Footer/Footer';
import { useSelector } from "react-redux";
import { RootState } from '../../store/Store';
import { IRestaurant } from '../../Interfaces'
import { useNavigate } from 'react-router-dom';


const RestaurantsPage: React.FC= () => {
    const AllRestaurants = useSelector(
        (state:RootState) => state.restaurants.value
    );
    console.log();
    
    const navigate = useNavigate();
    const restaurantsCards = AllRestaurants.map((restaurant:IRestaurant) =>{
        return <CardGeneral
        onClick={()=> navigate(`/restaurants/${restaurant.id}`)}
        class='one-restaurant'
        ImgSrc={require(`../../${restaurant.image}`)} 
        ImgAlt={restaurant.name}  
        name={restaurant.name} 
        chefName={restaurant.chefName} 
        moreInfoSrc={require(`../../assets/icon/star${restaurant.rating}.svg`)}
      />
    })
    return (
        <div>
            <NavBar />
            <FilterBarByNew />
            <FilterBarByPrice />
            <div className='restaurants-container'>
                {restaurantsCards}
            </div>
            <Footer />
        </div>
    )
}
export default RestaurantsPage;