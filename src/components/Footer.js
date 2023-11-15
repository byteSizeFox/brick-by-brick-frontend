import React from 'react'
import { Navbar } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import bytesize from '../assets/bytesize.png'

function Footer() {
    return (
        <>
            <div>
                <div className='footer-container'>
                    <Navbar color='warning' fixed='bottom' id='navbar-footer'>
                        <div className='stack'>
                            <img src={bytesize} alt='Logo' className='footer-logo'/>
                            <h6 className='footer-copy'>
                                &copy; 2023 ByteSize
                            </h6>
                        </div>
                        <div>

                            <NavLink to="/" className="footer-links">
                                Home
                            </NavLink>
                            <NavLink to="/aboutus" className="footer-links">
                                About Us
                            </NavLink>
                        </div>
                    </Navbar>
                </div>
            </div>
        </>
    )
}

export default Footer