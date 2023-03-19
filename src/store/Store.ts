import { configureStore } from "@reduxjs/toolkit"
import { IRestaurantsState,IChefsState ,IDishesState, IUsersState  } from '../Interfaces'
// import { IChefsState } from '../Interfaces'
// import { IDishesState } from '../Interfaces'
import RestaurantsSlice from "./slices/RestaurantsSlice"
import DishesSlice from "./slices/DishesSlice"
import ChefsSlice from "./slices/ChefsSlice"
import UsersSlice from "./slices/UsersSlice"


export interface RootState {
    restaurants: IRestaurantsState;
    chefs: IChefsState;
    dishes: IDishesState;
    users: IUsersState;
  }
  

export default configureStore({
    reducer:{
        restaurants: RestaurantsSlice,
        chefs: ChefsSlice,
        dishes: DishesSlice,
        users: UsersSlice,
    }
});