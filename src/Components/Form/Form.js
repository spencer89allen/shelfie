import React, { Component } from 'react';



class Form extends Component {
    state = {
        image: '',
        name: '',
        price: '',
        product: [],
    };

    handleInput(name, value) {
        this.setState({
            [name]: value,
        });
    }

    handleAddNewProduct () {
        const { image, name, price } = this.state;
        var newProduct = this.state.product
        newProduct.push({ image, name, price });
        this.setState({
            product: newProduct,
            image: '',
            name: '',
            price: '',
        });
    }

    handleCancel () {
        this.setState({
            image: '',
            name: '',
            price: '', 
        })

    }

    render() {
        return (
            <div >
                <p>Form</p>
                <p>
                    <input  placeholder=' Image URL' 
                            value={this.state.image}
                            onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                            name="image"
                            />
                </p>
                <p>
                    <input  placeholder=' Product Name' 
                            value={this.state.name}
                            onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                            name="name"
                            />
                </p>
                <p>
                    <input  placeholder=' Price' 
                            value={this.state.price}
                            onChange={(e) => this.handleInput(e.target.name, e.target.value)}
                            name="price"
                            />
                </p>
                <button onClick={() => this.handleAddNewProduct()}>Add to Inventory</button>
                <button onClick={() => this.handleCancel()}>Cancel</button>
            </div>
        )
    }
};

export default Form;