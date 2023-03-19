import {createSlice} from "@reduxjs/toolkit";
import {IRestaurant} from "../../Interfaces"
import HomeCard from '../../components/General/CardGeneral/CardGeneral'

const presentRestaurants = async () => { 
    console.log("presentRestaurants");
    
    try{
        const response = await fetch('http://localhost:8000/api/restaurants',{
            method: 'GET',
    });
        const data = await response.json();
        return data ;  
    } catch (error) {
        console.log('There was an error', error);
    }
  }
  
  const restaurantsAllData:Array<IRestaurant> = await presentRestaurants();
  console.log(restaurantsAllData , "restaurantsAllData");
  
  
export const RestaurantsSlice = createSlice({
    name: "Restaurants",
    initialState: {
        value: restaurantsAllData
    },
    reducers: {
        filterRestaurants: (state, action) => {
            const filterType = action.payload;
                switch (filterType){
                case "all":
                    state.value = restaurantsAllData 
                    break;
                case "new":
                    state.value = restaurantsAllData
                    state.value = state.value.filter((restaurant:IRestaurant) => restaurant.isNew === true); 
                    break;
                case "mostPopular":
                    state.value = restaurantsAllData
                    state.value = state.value.filter((restaurant:IRestaurant) => restaurant.mostPopular === true); 
                    break;
                case "openNow":
                    state.value = restaurantsAllData
                    const date = new Date();
                    const showTime = date.getHours()
                    state.value = state.value.filter(
                        (restaurant:IRestaurant) => {
                            if(showTime >= restaurant.openHour!  && showTime <= restaurant.closeHour!){
                                return restaurant
                            }
                            return null
                        })
                    break;
                default:
                    state.value = state.value;
                }}
        }
        });

export const {filterRestaurants} = RestaurantsSlice.actions;
export default RestaurantsSlice.reducer;