import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
  }

  // componentDidMount() {
  //   Axios.get('/api/inventory').then(res => {
  //     this.setState({inventory: res.data})
  //   })
  // }

  render() {
    return (
      <div className="App">
        <Dashboard />
        <Form />
        <Header />
      </div>
    );
  }
  
}

export default App;
