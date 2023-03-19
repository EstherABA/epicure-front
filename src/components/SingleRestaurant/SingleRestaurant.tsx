import React, {useState, useEffect} from 'react';
import './SingleRestaurant.css';
import CardGeneral from '../General/CardGeneral/CardGeneral';
import { ICard } from '../../Interfaces';
import { useSelector } from "react-redux";
import { RootState } from '../../store/Store';
import { IRestaurant, IDish } from '../../Interfaces'
import { useParams } from 'react-router-dom';
import Clock from '../../assets/icon/clock.svg';
import NavBar from '../General/NavBar/NavBar';
import Footer from '../General/Footer/Footer';
import ButtonG from '../General/ButtonGeneral/ButtonG';
import LineAroundPrice from '../../assets/icon/LineAroundPrice.svg'
import Modal from '../Modal/Modal';



const SingleRestaurant: React.FC = () => {
    const idFromRestNavigate = useParams();
    let arrDishesObj: Array<IDish> = [];

    const allRestaurants = useSelector(
        (state:RootState) => state.restaurants.value);
    const allDishes = useSelector(
        (state:RootState) => state.dishes.value);
    
    const mapRestaurants = allRestaurants.filter((restaurant:IRestaurant) =>{
        return restaurant.id === Number(idFromRestNavigate.id)
    })[0];
    mapRestaurants.dishes.map((DishIdFromRestObj:number) =>{
        allDishes.filter((dishObj:IDish)=> {
        if(dishObj.id === DishIdFromRestObj) {
            arrDishesObj.push(dishObj)
        }}); 
    });

    const [modalState, setModal] =  useState(false)
    const [dishIdState, setDishId] =  useState(0);

    const dishesPresentInPage = arrDishesObj.map((dish:IDish)=>{
        return <CardGeneral 
        class='dish-card'
        ImgSrc={require(`../../${dish.image}`)}
        ImgAlt={dish.name}
        name={dish.name}
        ingredients= {dish.ingredients}
        currency= {require('../../assets/icon/ils.svg').default}
        price= {dish.price}
        priceLine={LineAroundPrice}
        onClick= {()=> {
            setDishId(dish.id)
            setModal(true)
        }}
        />
        
    });
    
    const date = new Date();
    const showTime = date.getHours();
    const openingHours = () => {
        if(showTime >= mapRestaurants.openHour  && showTime <= mapRestaurants.closeHour!){
            return <div> <p className='open-now'> <img src={Clock}/> Open now</p></div>
            }
        else {return <p className='open-now'>it's Close</p>}
    }

    return (
        <>
        <Modal showModal={modalState} selectedDishId={dishIdState} dishes={allDishes} closeModal={() => setModal(false)} />
        <NavBar />
        <div className='single-restaurant-container'>
            <img src={require(`../../${mapRestaurants.imageHero}`)} className='restaurant-page-image'></img>
            <div className='info-restaurant'>
                <span className='rest-name'>{mapRestaurants.name}</span>
                <span>{mapRestaurants.chefName}</span>
            </div>
            {openingHours()}
            <nav className='nav-container'> 
                <ButtonG anotherClass='btn-with-line' title='Breakfast'/>
                <ButtonG anotherClass='btn-with-line' title='Lunch'/>
                <ButtonG anotherClass='btn-with-line' title='Dinner'/>
            </nav>
            <div className='dishes-container'>
                {dishesPresentInPage}
            </div>
            <Footer />
        </div>
        </>
    )
    
     
}
 
export default SingleRestaurant;