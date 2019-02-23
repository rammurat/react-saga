import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><NavLink to='about'>About</NavLink></li>
                <li><NavLink to='contact'>Contact</NavLink></li>
                <li><NavLink to='terms'>Terms and conditions</NavLink></li>
                <li><NavLink to='privacy'>Privacy and policy</NavLink></li>
            </ul>
        </footer>
    )
}

export default Footer