import React, { Component } from 'react';
import './App.css';

//Components
import Header from './Components/Header/Header'
//import Dashboard from './Components/Dashboard/Dashboard';
//import Form from './Components/Form/Form';

import routes from './routes';

class App extends Component {


  
  render() {
    return (
      <div className="App">
        <Header/>
        { routes }
      </div>
    );
  }
}

export default App;
