import React, { Component } from 'react';


//Components
import Product from '../Product/Product';

class Dashboard extends Component {
    
    render() {
        const display = this.props.list.map((element, id) => {
            return (
                <div key={id}>
                    <br/>
                    {element.name}
                    <br/>
                    {element.image}
                    <br/>
                    {element.price}
                </div>
            )
        })
        return (
            <div>
                <p>Dashboard</p>
                {display}
                <Product/>
            </div>
        )
    }
};

export default Dashboard;