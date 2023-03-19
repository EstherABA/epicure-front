import React from "react";
import "./Hero.css";
import ButtonG from '../General/ButtonGeneral/ButtonG'
import Search from '../../assets/icon/Search.svg'


const Hero: React.FC = () => {
      return (
        <>
        <div className="hero-container">
            <div className="description-box">
                <div className="description">
                    <span>Epicure works with the top</span>
                    <span>chef restaurants in Tel Aviv</span>
                </div>
                
                <div className="search-input">
                    <ButtonG src={Search} alt="search"/>
                    <input className="input-hero" placeholder=" Search for restaurant cuisine, chef"/> 
                </div>
            </div>
        </div>
        </>
      )
    }

export default Hero;