import React from 'react';
import { Link } from 'react-router-dom'

export default function Header() {

    return (

        <section className="hero is-info is-medium is-primary is-bold">
            <div className="hero-body">
                <h1 className="title">Shelfie</h1>
                 <div>
                    <Link to='/' className="subtitle">Dashboard</Link>
                    <p></p>
                    <Link to="/add" className="subtitle">Add Product</Link>
                 </div>
            </div>
        </section>
    )

}