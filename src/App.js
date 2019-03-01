import React, { Component } from 'react';
import './App.css';

//Components
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';

class App extends Component {
 
  state = {
    inventory: [ 
      {
        image:'https://http.cat/100',
        name: 'Cat 1',
        price: 15,
      }, 
      {
        image:'https://http.cat/404',
        name: 'Cat 2',
        price: 20
      } 
    ],
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
