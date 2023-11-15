import React from 'react'
import { Navbar } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import bytesize from '../assets/bytesize.png'

function Footer() {
    return (
        <>
            <Navbar 
                className='navbar-footer' 
                fixed="bottom" 
                color='warning'
            >
                <img className='footer-logo'
                    src={bytesize} 
                    alt='bytesize logo' 
                    id='footer-logo'  
                    width="120" 
                    height="50"
                />
                <p className='footer-text'>
                    &copy; 2023 ByteSize 
                </p>
                    <NavLink 
                        to="/aboutus" 
                        className="about-us"
                    >
                        About-Us
                    </NavLink>
            </Navbar>
        </>
    )
}

export default Footer