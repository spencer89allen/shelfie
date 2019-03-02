import React, { Component } from 'react';
import axios from 'axios';

//Components
import Product from '../Product/Product';

class Dashboard extends Component {

    state = {
        inventory: [],

    }

    componentDidMount() {
        this.getInventory();
    }

    getInventory = () => {
        axios.get('/api/inventory').then((response) => {
            this.setState({
                inventory: response.data,
            })
        })
    };

    handleDelete = (id) => {
        axios.delete(`/api/delete/${id}`).then((response) => {
            this.setState({
                inventory: response.data
            })
        });
    };


    render() {

        return (
            <div>
                <h1>Dashboard</h1>
                <Product delete={this.handleDelete} product={this.state.inventory}/>
            </div>
        )
    }
};

export default Dashboard;