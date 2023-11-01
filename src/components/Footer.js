import React from 'react'
import { Navbar } from 'reactstrap'
import bytesize from '../assets/bytesize.png'

function Footer() {
  return (
    <>
      <Navbar className='navbar-footer' fixed="bottom" color='warning'>
        <img src={bytesize} alt='bytesize logo' id='footer-logo'  width="120" height="50"/>
        <p id='footer-text'>&copy; 2023 ByteSize </p>
      </Navbar>
    </>
  )
}

export default Footer