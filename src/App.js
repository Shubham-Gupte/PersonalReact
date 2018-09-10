import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoadingScreen from 'react-loading-screen';
import hand from './media/loading/hand.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  componentDidMount () {
    setTimeout(() => this.setState({loading:false}), 1500)
  }
  render() {
    const {loading} = this.state
    return (
      <div>
        <LoadingScreen
        loading={loading}
        bgColor='#f0f0f0'
        spinnerColor='#F9D871'
        textColor='black'
        logoSrc={hand}
        font='Courier'
      >
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </LoadingScreen>
      </div>
    );
  }
}

export default App;
