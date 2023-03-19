import {createSlice} from "@reduxjs/toolkit"
import {IDishesState} from '../../Interfaces';

const presentDishes = async () => { 
    try{
        const response = await fetch('https://epicure-server-97fs.onrender.com/api/dishes',{
            method: 'GET',
    });
        const data = await response.json();
        return data ;  
    } catch (error) {
        console.log('There was an error', error);
    }
  }
  
const dishes:IDishesState = await presentDishes();

export const DishesSlice = createSlice({
    name: "Dishes",
    initialState: {
        value: dishes
    },
    reducers: {

    }
});

export default DishesSlice.reducer;