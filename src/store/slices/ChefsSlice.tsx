import {createSlice} from "@reduxjs/toolkit";
import {IChefsState} from '../../Interfaces';
import axios from "axios";

const presentChefs = async () => { 
    try{
        const response = await axios.get('http://localhost:8000/api/chefs')
        const data = await response.data;
        return data ;  
    } catch (error) {
        console.log('There was an error', error);
    }
  }
  
const chefs:IChefsState = await presentChefs();
  
  
export const chefsSlice = createSlice({
    name: "chefs",
    initialState: {
        value: chefs,
    },
    reducers: {
        updateDataAfterDeleteChefs: (state,action) => {
            const updatedChefsData = action.payload;
            state.value = chefs;
            state.value = updatedChefsData;
        }

  
    }
});
export const {updateDataAfterDeleteChefs} = chefsSlice.actions;
export default chefsSlice.reducer;