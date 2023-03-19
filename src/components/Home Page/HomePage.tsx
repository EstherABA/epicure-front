import React from 'react';
import NavBar from '../General/NavBar/NavBar';
import './HomePage.css'
import Hero from '../Hero/Hero';
import PopularRestaurant from '../Popular Restaurant/PopularRestaurant'
import PopularDish from '../PopularDish/PopularDish';
import MeaningOfIcon from '../Meaning of icon/MeaningOfIcon';
import ChefOfWeek from '../ChefOfWeek/ChefOfWeek';
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../General/Footer/Footer'

const HomePage: React.FC= () => {
    return (
        <div>
            <NavBar />
            <Hero />
            <PopularRestaurant />
            <PopularDish />
            < MeaningOfIcon />
            <ChefOfWeek />
            <AboutUs />
            <Footer />
        </div>

    )
}

export default HomePage;