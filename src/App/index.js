import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout'

class App extends Component {
  render () {
    return (
      <AppLayout>
        <div className="App">Hello World</div>  
      </AppLayout>
    )
  }
}

export default App;
