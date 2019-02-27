import React, { Component } from 'react';


//Components
import Product from '../Product/Product';

class Dashboard extends Component {

    render() {
        return (
            <div>
                <p>Dashboard</p>
                <Product/>
            </div>
        )
    }
};

export default Dashboard;