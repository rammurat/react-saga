import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const Footer = ({about, customer_services}) => {
    return (
        <footer>
            <h1>Footer</h1>
            <ul className="flex-container nowrap">
                {about.map((row) => (
                    <li className="flex-item">
                    <Link to={row.link}>{row.text}</Link>
                    </li>          
                ))}
            </ul>
            <ul className="flex-container nowrap">
                {customer_services.map((row) => (
                    <li className="flex-item">
                    <Link to={row.link}>{row.text}</Link>
                    </li>          
                ))}
            </ul>
        </footer>
    )
}

Footer.propTypes = {
    about: PropTypes.object,
    customer_services: PropTypes.object
}

export default Footer
