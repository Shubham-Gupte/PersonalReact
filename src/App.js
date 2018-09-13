import React, { Component } from 'react';
import './App.css';
import LoadingScreen from 'react-loading-screen';
import hand from './media/loading/hand.png'
import HomeScreen from './media/home/HomeScreen'
import logo from './media/logo1.png'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

{/*Section for adding fonts*/}
library.add(faBars);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }
  componentDidMount () {
    setTimeout(() => this.setState({loading:false}), 1500)
    document.title = "Shubham"
  }
  render() {
    const {loading} = this.state;
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
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top anchor" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={logo} id= "mainImage" alt="none"/></a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu &nbsp;
          <FontAwesomeIcon icon="bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav text-uppercase ml-auto">

            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio"><u>Projects</u></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about"><u>Education</u></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#team"><u>Hobbies</u></a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#contact"><u>Contact</u></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <HomeScreen>
        
      </HomeScreen>
      </LoadingScreen>
      </div>
    );
  }
}

export default App;
