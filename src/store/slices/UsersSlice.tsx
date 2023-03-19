import {createSlice} from "@reduxjs/toolkit";
import {IUser} from '../../Interfaces';
import { IUsersState } from "../../Interfaces";
import axios from 'axios' 

const presentUsers = async () => { 
    try{
        const response = await axios.get('http://localhost:8000/api/users/');
        console.log(response);
        return (response.data)
    } catch (error) {
        console.log('There was an error get all user data from db', error);
    }
}
const usersAllData = await presentUsers();

export const UsersSlice = createSlice({
    name: "Users",
    initialState: {
        value: {},
    },
    reducers: {
        presentUserName: (state, action) => {
            const userRegisterData = action.payload;
            state.value = usersAllData
            state.value = 
                { 
                firstName: userRegisterData.firstName,
                lastName: userRegisterData.lastName
            }}
    }
});

export const {presentUserName} = UsersSlice.actions;
export default UsersSlice.reducer;