import React from 'react';
import { useState } from 'react';
import ButtonG from '../ButtonGeneral/ButtonG';
import './FilterBarByNew.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/Store';
import  {filterRestaurants}  from '../../../store/slices/RestaurantsSlice'

const FilterBarByNew: React.FC = () => {
    const dispatch = useDispatch ();
    const restFilter = useSelector((state: RootState) => state.restaurants.value)
    const [activeButton, setActiveButton] = useState ("all")

    const handleAllClick = () => {
        dispatch(filterRestaurants("all"));
        setActiveButton("all")
    }
    const handleNewClick = () => {
        dispatch(filterRestaurants("new"));
        setActiveButton("new")
    }
    const handleMostPopularClick = () => {
        dispatch(filterRestaurants("mostPopular"));
        setActiveButton("mostPopular")
    }
    const handleOpenNowClick = () => {
        dispatch(filterRestaurants("openNow"));
        setActiveButton("openNow")
    }

    
    return ( 
        <div className='filter-bar-new'>
            <ButtonG title='All' onClick={handleAllClick}/>
            <ButtonG title='New' onClick={handleNewClick}/>
            <ButtonG title='Most Popular' onClick={handleMostPopularClick}/>
            <ButtonG title='Open Now'  onClick={handleOpenNowClick}/>
            <ButtonG title='Map View'/>     
        </div>

     );
}
 
export default FilterBarByNew;