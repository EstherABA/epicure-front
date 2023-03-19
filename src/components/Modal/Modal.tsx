import  React from 'react';
import {useState} from 'react';
import './Modal.css'
import Plus from '../../assets/icon/plus.svg'
import Subtract from '../../assets/icon/subtract.svg'
import Exit from '../../assets/icon/exit.svg'
import {IDish, IModal} from '../../Interfaces'
import SingleRestaurant from '../SingleRestaurant/SingleRestaurant';
import CardGeneral from '../General/CardGeneral/CardGeneral';
import LineAroundPrice from '../../assets/icon/LineAroundPrice.svg';

const Modal: React.FC<IModal> = (props:IModal) => {
    const [modalState, setModal] =  useState(true)
    const [Quantity, setQuantity] =  useState(0)
    
    let chosenDish:IDish = props.dishes.filter((dishObj:IDish)=> {
                    return dishObj.id === props.selectedDishId
                })[0];
    const handleCloseModal = () => {
        setModal(false)
    }
    const handlePlusClick = ()=>{
        setQuantity(Quantity+1)
    }
    const handleSubtractClick = ()=>{
        setQuantity(Quantity-1)
    }
    return ( <>
        {(props.showModal) &&(
        <>
        <div className="modal">
            <div className="overlay" ></div>
            <div className="modal-content">
                {
                    <CardGeneral 
                    class='dish-modal'
                    ImgSrc={require(`../../${chosenDish.image}`)}
                    ImgAlt={chosenDish.name}
                    name={chosenDish.name}
                    ingredients= {chosenDish.ingredients}
                    currency= {require('../../assets/icon/ils.svg').default}
                    price= {chosenDish.price}
                    priceLine={LineAroundPrice} 
                    />
                }
                <form className='dish-modal-form'>
                    <div className='with-line'>Choose a side</div>
                    {
                    chosenDish.optionalSides.map((option:string)=>{
                        return <div className='form-part'>
                        <input type="radio" value={option}></input>
                        <label>{option}</label>
                        </div>})   
                    } 
                    <div className='with-line'>Changes</div>
                    {
                    chosenDish.optionalChanges.map((change:string)=>{
                        return <div className='form-part'>
                        <input type="checkbox" value={change}></input>
                        <label>{change}</label>
                        </div>})   
                    } 
                </form>
                <div className='quantity-container'>
                    <div className='quantity-title'>Quantity</div>
                    <div className='quantity'>
                        <button onClick={handleSubtractClick}><img src={Subtract}/></button>
                        <span>{Quantity}</span>
                        <button onClick={handlePlusClick}><img src={Plus}/></button>
                    </div>    
                    <button className='add-to-bag'>ADD TO BAG</button>
                </div>
            </div>
        </div>
                <button className='close-modal' onClick={()=>props.closeModal}>
                    <img src={Exit}/></button>
        </>
        
          )} </> );
}
 
export default Modal;
