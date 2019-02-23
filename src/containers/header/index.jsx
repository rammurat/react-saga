import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

const Header = ({super_header, top_nav}) => {
    return (
        <header>
            <ul>
                {super_header.map((row) => (
                    <li>
                    <Link to={row.link}>{row.text}</Link>
                    </li>          
                ))}
            </ul>

            <ul>
                {top_nav.men.clothing.map((row) => (
                    <li>
                    <Link to={row.link}>{row.text}</Link>
                    </li>          
                ))}
            </ul>
        </header>
    )
}

Header.propTypes = {
    super_header: PropTypes.object,
    top_nav: PropTypes.object
}

export default Header