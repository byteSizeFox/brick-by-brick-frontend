import React from 'react'
import {NavLink} from 'react-router-dom'



function NotFound() {
    return (
        <div className="not-found">
            <h1>404 Not Found</h1>
            <NavLink 
                to="/" 
                className="404-link"
                style={{color: "white"}}
            >
                Return Home
            </NavLink>
        </div>
    )
}

export default NotFound