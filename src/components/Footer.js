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
                <div className='footer-container'> 
                        <NavLink 
                            to="/aboutus" 
                            className="about-us"
                        >
                            About-Us
                        </NavLink>
                        <NavLink 
                            to="/" 
                            className="home-link"
                        >
                            Home
                        </NavLink>
                        <p className='footer-text'>
                            &copy; 2023 ByteSize 
                        </p>
                </div>
            </Navbar>
        </>
    )
}

export default Footer