import React from 'react';
import NavBar from '../General/NavBar/NavBar';
import ChefPortraitCard from '../General/ChefPortraitCard/ChefPortraitCard';
import FilterBarByNew from '../General/FilterBarByNew/FIlterBarByNew';
import Footer from '../General/Footer/Footer';
import {useSelector, useDispatch} from "react-redux";
import { RootState } from '../../store/Store';
import { IChef } from '../../Interfaces';
import './ChefsPage.css'
import p from "../../assets/images/chefs/avivMoshe.png"
import { updateDataAfterDeleteChefs } from '../../store/slices/ChefsSlice';



const ChefsPage: React.FC = () => {
    const AllChefs = useSelector(
        (state:RootState) => state.chefs.value
    );
    console.log(AllChefs, "All chefs");
    
    const dispatch = useDispatch ();
    
    const deleteRequest = async (e:any,chefId:number) => {
        await fetch('https://epicure-server-97fs.onrender.com/api/chefs/delete', {
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
        deleteCardBtn = {"X"}
        idDescription= {"none-description"}
        onClickDelete= {(e)=>{deleteRequest(e,chef.id)}}
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