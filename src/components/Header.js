import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'


function Header({ signin, currentUser, logout }) {

    const navigate = useNavigate()

    const handleClick = () => {
        logout()
        navigate("/")
    }

    const handleLogIn = () => {
        navigate("/signin")
    }

    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);


  
    return (
        <div>
            <Navbar color="warning" light>
                <NavbarBrand href="/" className="logo-header">
                    <img 
                        src={logo} 
                        alt="brick-logo" 
                        width="70" 
                        height="70" 
                    />
                    Brick By Brick
                </NavbarBrand>
                <NavbarToggler 
                    onClick={toggleNavbar} 
                    className="me-2" 
                />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav id="navbar-links" navbar>
                        <NavItem>
                            <NavLink to="/postindex">
                                See all Builds
                            </NavLink>
                        </NavItem>
                        {currentUser && (
                        <NavItem>
                            <NavLink to="/myposts">
                                See all your Builds
                            </NavLink>
                        </NavItem>
                        )}
                        {currentUser && (
                        <NavItem>
                            <NavLink to="/postnew">
                                Post your new Build
                            </NavLink>
                        </NavItem>
                        )}
                        {currentUser && (
                        <>
                            <NavItem>
                                <NavLink onClick={handleClick}>
                                    Logout
                                </NavLink>
                            </NavItem>
                        </>
                        )}
                        {!currentUser && (
                            <>
                                <NavItem>
                                    <NavLink 
                                        signin={signin} 
                                        to={`/signin`} 
                                        onClick={handleLogIn}>
                                        Login
                                    </NavLink>
                                </NavItem>
                            </>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
  }

export default Header