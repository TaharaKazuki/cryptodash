import React, { Component } from 'react';
import './App.css';
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import WelcomMessage from './WelcomMessage'


class App extends Component {
  render () {
    return (
      <AppLayout>
        <WelcomMessage />
        <AppBar />
        <div className="App">Hello World</div>  
      </AppLayout>
    )
  }
}
export default App;

