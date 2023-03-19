import React from 'react';
import ButtonG from '../ButtonGeneral/ButtonG';
import LineFooter from '../../../assets/icon/LineFooter.svg'
import './Footer.css'

const Footer: React.FC = () => {
    return ( 
        <div  className='footer-container'>
            <img src={LineFooter} />
            <div className='footer-elements'>
                <ButtonG title='Contact Us'/>
                <ButtonG title='Term Of Use'/>
                <ButtonG title='Privacy Policy'/>
            </div>
        </div>
     );
}
 
export default Footer;