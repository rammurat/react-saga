import React from 'react'
import {Link} from 'react-router-dom'

const Error = ({about, customer_services}) => {
    return (
        <footer>
            <h1>Page not found</h1>
            <Link to='/'><img src='images/error.jpg' alt='Error' height='400px'/></Link>
            <Link to='/'>Start shopping</Link>
        </footer>
    )
}

export default Error
