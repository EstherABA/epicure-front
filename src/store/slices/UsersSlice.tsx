import {createSlice} from "@reduxjs/toolkit";
import {IUser} from '../../Interfaces';
import { IUsersState } from "../../Interfaces";
import axios from 'axios' 

const presentUsers = async () => { 
    try{
        const response = await axios.get('https://epicure-server-97fs.onrender.com/api/users');
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
            console.log(userRegisterData, "userRegisterData");
            
            state.value = usersAllData
            state.value = 
                { 
                firstName: userRegisterData.firstName,
                lastName: userRegisterData.lastName
                }
        }
    }
});

export const {presentUserName} = UsersSlice.actions;
export default UsersSlice.reducer;