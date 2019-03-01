import React, { Component } from 'react';
import Axios from 'axios';
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
    Axios.get('/api/inventory').then((res) => {
      this.setState({
        inventory: res.data,
      })
      console.log(res)
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header/>
        <Dashboard list={this.state.inventory}/>
        <Form/>
      </div>
    );
  }
}

export default App;
