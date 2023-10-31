import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
import { NavLink } from 'react-router-dom';



function Header(props) {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  
    return (
      <div>
        <Navbar color="warning" light>
          <NavbarBrand href="/" className="logo-header">
          {/* <img src={logo} alt="brick-logo" width="50" height="50" /> */}
            Brick By Brick
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/postindex">See all Builds</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/postnew">
                  Post your new Build
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

export default Header