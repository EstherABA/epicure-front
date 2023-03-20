import React from 'react';
import CardGeneral from '../General/CardGeneral/CardGeneral';
import './ChefOfWeek.css';
import ChefPortraitCard from '../General/ChefPortraitCard/ChefPortraitCard';
import { IChef, IRestaurant} from '../../Interfaces'; 
import { RootState } from '../../store/Store';
import { useSelector } from 'react-redux';
import res from '../../assets/images/claro.png'



const ChefOfWeek: React.FC = () => {
    const allChefs = useSelector(
        (state:RootState) => state.chefs.value
    );
    const chefs = allChefs.map((chef:IChef) => { 
        return ( 
           chef.isChefOfTheWeek ? (
            <>
            <div className='chefs-data-container'>
                <ChefPortraitCard 
                    src={require(`../../${chef.portrait}`)} 
                    alt={`${chef.name}`} 
                    name={`${chef.name}`} 
                    description={`${chef.description}`} 
                    idDescription= {'description'}
                    />
            </div>
            <p className=' title-of-the-week'>{`${chef.name} Restaurants:` } </p>
            <div className='chef-restaurants'>
                { 
                    chef.restaurants.map((restaurant:string)=> <CardGeneral 
                        class= {'restaurantP-card'}
                        ImgSrc={require(`../../assets/images/${restaurant}.png`)} ImgAlt={restaurant} name={restaurant} />)
                }
            </div>
            </>
            ) : (null)) });
                                
           

    return (  
        <div>
            <p className='popular-title-container'>CHEF OF THE WEEK:</p>
            <div>
                {chefs}
            </div>
        </div>
    );
}
 
export default ChefOfWeek;