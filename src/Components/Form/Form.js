import React, { Component } from 'react';
import axios from 'axios';



class Form extends Component {
    state = {
        image: '',
        name: '',
        price: '',
        isEdit: false,
    };

    componentWillMount() {
        if (this.props.match.path.includes('edit')) {
            this.setState({
                isEdit: true,
            })
            axios.get(`/api/product/${this.props.match.params.id}`).then((response) => {
                this.setState({
                    image: response.data.image,
                    name: response.data.name,
                    price: response.data.price,
                })
            })
        }
    }

    handleInput(name, value) {
        this.setState({
            [name]: value,
        });
    }

    addInventoryItem = (newProduct) => {
        return axios.post('/api/product', newProduct)
    };

    handleAddNewProduct() {
        const { image, name, price } = this.state;
        var product = { image, name, price };

        let requestPromise;

        if (this.state.isEdit) {
            requestPromise = axios.put(`/api/product/${this.props.match.params.id}`, product);
        } else {
            requestPromise = this.addInventoryItem(product);
        }

        requestPromise
            .then(() => {
                this.props.history.push('/');
            })
            // .catch();
    }

    handleEdit() {
        axios.put().then()
    }


    handleCancel() {
        this.setState({
            image: '',
            name: '',
            price: '',
        })

    }



    render() {
        return (
            <div >
                <h1>Form</h1>
                <p>
                    <input placeholder=' Image URL'
                        value={this.state.image}
                        onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                        name="image"
                    />
                </p>
                <p>
                    <input placeholder=' Product Name'
                        value={this.state.name}
                        onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                        name="name"
                    />
                </p>
                <p>
                    <input placeholder=' Price'
                        value={this.state.price}
                        onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                        name="price"
                    />
                </p>
                <div >
                    <button onClick={() => this.handleAddNewProduct()} className="button is-rounded is-success">
                        {this.state.isEdit ? 'Save Changes' : 'Add to Inventory'}
                    </button>
                    <button onClick={() => this.handleCancel()} className="button is-rounded is-warning">Cancel</button>
                </div>
            </div>
        )
    }
};

export default Form;