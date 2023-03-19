import * as React from 'react';
import './AboutUs.css'
import ButtonG from '../General/ButtonGeneral/ButtonG';
import iphoneDownload from '../../assets/icon/iphoneDownload.svg'
import androidDownload from '../../assets/icon/androidDownload.svg'
import logoAboutUs from '../../assets/icon/logoAboutUs.svg'

const AboutUs: React.FC = () => {
    return ( 
        <div className='aboutUs-container'>
            <div className='all-content-aboutUs'>
                <p>ABOUT US:</p>
                <div className='description-aboutUs'>
                        <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam at diam tincidunt, pretium metus eget, lobortis
                        Sed id tortor mattis libero euismod gravida ut sit
                        Quisque eget metus eu est auctor vehicula. Ut cursus
                        dictum porttitor. Ut pellentesque at lacus
                        in mattis. Interdum et malesuada 
                        </div>
                        <div>
                        dignissim viverra ante interdum. Nunc aliquam fringilla
                        Nam eget turpis eu tellus efficitur mattis
                        quis at enim. Sed neque erat.
                        </div>
                </div>
                <div className='aboutUs-download-btn'> 
                    <ButtonG src={iphoneDownload} alt="iphone download" />
                    <ButtonG src={androidDownload} alt="android download" />
                </div>
            </div>
            <div>
                <ButtonG anotherClass='aboutUs-epicure-logo'src={logoAboutUs} alt="epicure logo" />
            </div>

        </div>
     );
}
export default AboutUs;