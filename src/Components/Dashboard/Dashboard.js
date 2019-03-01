import React, { Component } from 'react';
import axios from 'axios';

//Components
import Product from '../Product/Product';

class Dashboard extends Component {

    handleDelete (id) {
        axios.delete(`/api/delete/${id}`).then((res) =>{
            this.props.get()
        });
    }
    
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
                    <br/>
                    <button onClick={(e) => this.handleDelete(element.id)}>Remove</button>
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