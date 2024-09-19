import React from 'react';
import './Footer.css';
import logo from '../../assets/deltalogo.png';
import { FaHome, FaInfo, FaServicestack, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='Footer'>
     <div className='Footer-Left'>
        <div className='Footer-details'>
             <img src={logo} alt='logo' className='footerLogo'/>
             <div className='Footer-orgName'>
                  <h1>DELTA COOLING SYSTEMS LIMITED</h1>
                  <div className='underline-footer'></div>
                  <h2>Your Ultimate and Trusted Cooling Solutions Provider</h2>
             </div>
        </div>
        <div className='Footer-copyright'>
            Copyright  &#169;  2024 <br></br> DELTA COOLING SYSTEMS LIMITED <br></br>  All Rights Reserved
        </div>
     </div>
     <div className='Footer-Right'>
         <div className='footer-menu'>
             <div className='homeFooter'>
                 <a href='/'><FaHome className='navbar-icon' />Home</a>
                 <br></br>
             </div>
             <div className='aboutFooter'>
                <a href='/about'><FaInfo className='navbar-icon' />About</a>
                <br></br>
             </div>
             <div className='servicesFooter'>
                <a href='/services'><FaServicestack className='navbar-icon' />Services</a>
                <br></br>
             </div>
             <div className='contactFooter'>
                <a href='/contact-us'><FaPhoneAlt className='navbar-icon' />Contact Us</a>
             </div>  
         </div>
     </div>
    </footer>
  )
}

export default Footer