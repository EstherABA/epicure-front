import React from 'react';
import './App.css';
import HomePage from './components/Home Page/HomePage';
import {BrowserRouter, Route, Routes } from "react-router-dom"
import RestaurantPage from './components/RestaurantsPage/RestaurantsPage';
import ChefsPage from './components/ChefsPage/ChefsPage';
import SingleRestaurant from './components/SingleRestaurant/SingleRestaurant';
import SingInPage from './components/General/SingInPage/SingInPage';
import SignUpPage from './components/General/SignUpPage/SignUpPage';

const App: React.FC= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
        <Route path="/chefs" element={<ChefsPage />} />
        <Route path="/sign-in" element={<SingInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/restaurants/:id" element={<SingleRestaurant />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;