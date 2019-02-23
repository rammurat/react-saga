import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const Footer = ({about, customer_services}) => {
    return (
        <footer>
            <ul>
                {about.map((row) => (
                    <li>
                    <Link to={row.link}>{row.text}</Link>
                    </li>          
                ))}
            </ul>
            <ul>
                {customer_services.map((row) => (
                    <li>
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
