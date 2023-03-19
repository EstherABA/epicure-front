import React , { useMemo } from 'react';
import './NavBar.css'
import ButtonG from '../ButtonGeneral/ButtonG'
import logoEpicure from '../../../assets/icon/logoEpicure.svg'
import Search from '../../../assets/icon/Search.svg'
import Shop from '../../../assets/icon/Shop.svg'
import User from '../../../assets/icon/User.svg'
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { RootState } from '../../../store/Store';
import { IUser } from '../../../Interfaces';



const NavBar: React.FC = () => {
    const navigate = useNavigate();
    const AllUsers = useSelector(
        (state:RootState) => state.users.value
    );
    console.log(AllUsers, "user FIRST state from NAVBAR");

    const handleUserSigning = useMemo(() => {
        if (Object.keys(AllUsers).length === 2) {
            console.log(AllUsers, "user SECOND state from NAV");
            
            return <div>Hello {AllUsers.firstName} </div>;
        }
            return null
    }, [AllUsers]);
    

      
   
    return (
        <div className='nav-bar'> 
            <div className='side left'>
                <ButtonG  anotherClass='logo' src={logoEpicure} alt="logo" onClick={()=> navigate("/")}/>
                <ButtonG  anotherClass='btn-with-line' title='Restaurants' onClick={()=> navigate("/restaurants")}/>
                <ButtonG  anotherClass='btn-with-line' title='Chefs' onClick={()=> navigate("/chefs")} />
            </div>
                {
                    <>{handleUserSigning}</>
                }
            <div className='side right'>
                <div className='search-bar'>
                    <input className='input-nav-bar' type='text' placeholder='  Search for restaurant cuisine, chef'/>
                    <ButtonG anotherClass='search-icon' src={Search} alt="search"/>
                </div>
                    <ButtonG src={User} alt="user" onClick={()=> navigate("/sign-in")}/>
                    <ButtonG src={Shop} alt="shop"/>
            </div>
        </div>
    )
}

export default NavBar;
