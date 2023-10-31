import React from 'react'
import { Navbar } from 'reactstrap'

function Footer() {
  return (
    <>
      <Navbar className='navbar-footer' fixed="bottom" color='warning'>
        <p id='footer-text'>&copy; 2023 ByteSize </p>
      </Navbar>
    </>
  )
}

export default Footer