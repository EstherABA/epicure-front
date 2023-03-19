import React from 'react';
import NavBar from '../General/NavBar/NavBar';
import ChefPortraitCard from '../General/ChefPortraitCard/ChefPortraitCard';
import FilterBarByNew from '../General/FilterBarByNew/FIlterBarByNew';
import Footer from '../General/Footer/Footer';
import {useSelector, useDispatch} from "react-redux";
import { RootState } from '../../store/Store';
import { IChef } from '../../Interfaces';
import axios from 'axios';
import './ChefsPage.css'
import { updateDataAfterDeleteChefs } from '../../store/slices/ChefsSlice';
import { METHODS } from 'http';



const ChefsPage: React.FC = () => {
    const AllChefs = useSelector(
        (state:RootState) => state.chefs.value
    );
    const dispatch = useDispatch ();
    
    const deleteRequest = async (e:any,chefId:number) => {
        await fetch('http://localhost:8000/api/chefs/delete', {
            method: 'DELETE',
            headers: {'Content-type': 'application/json; charset=utf-8'},
            body: JSON.stringify({id:chefId})
          })
          .then((response)=> response.json())
          .then((data) => {
            //update the state on redux
            dispatch(updateDataAfterDeleteChefs(data))
            //refresh
            window.location.reload();
          })
          .catch((err) => {
            console.log(err.message,"error");
          });
    }


    const chefsCards = AllChefs.map((chef:IChef) =>{
        return  <ChefPortraitCard 
        src={require(`../../${chef.portrait}`)} 
        alt={`${chef.name}`} 
        name={`${chef.name}`} 
        deleteCardBtn = {"delete"}
        idDescription= {"none-description"}
        onClickDelete= {(e)=>{console.log("delte button FUN", chef.id);
        
            deleteRequest(e,chef.id)}}
        />
    })

    return (
        <div>
        <NavBar />
        <FilterBarByNew />
            <div className='all-chefs'>
                {chefsCards}
            </div>
        <Footer />
        </div> 
    );
}
 
export default ChefsPage;