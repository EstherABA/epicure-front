import React from 'react';
import ButtonG from '../ButtonGeneral/ButtonG';
import './FilterBarByPrice.css'
import priceRating from '../../../assets/icon/priceRating.svg'
import rating from '../../../assets/icon/rating.svg'
import distance from '../../../assets/icon/distance.svg';


const FilterBarByPrice: React.FC = () => {
    const arrFIlterBar = ["priceRating" ,"rating", "distance"]
    let maps = arrFIlterBar.map((singleFilter:string) => {
       return <ButtonG anotherClass='filter-bar-price-btn' src={require(`../../../assets/icon/${singleFilter}.svg`)}/>
    } )
    return ( 
        <div className='filter-bar-price'>
                {maps}
        </div>
     );
}
export default FilterBarByPrice;