import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {

    return (

        <div>
            <h1>Shelfie Header</h1>
            <Link to='/'>Dashboard</Link>
            <p></p>
            <Link to="/add">Add Product</Link>
        </div>
    )

}