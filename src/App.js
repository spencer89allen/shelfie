import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

//Components
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
 
  state = {
    inventory: [],

  }

  componentWillMount() {
    this.getInventory();
  }


  getInventory = () => {
    axios.get('/api/inventory').then((response) => {
      this.setState({
        inventory: response.data,
      })
    })
  };

  addInventoryItem = (newProduct) => {
    axios.post('/api/product', newProduct).then((response) => {
      console.log(response)
      this.getInventory();
    })
  };
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard  list={this.state.inventory}
                    get={this.getInventory}
        />
        <Form addInventoryItem={this.addInventoryItem} />
      </div>
    );
  }
}

export default App;
