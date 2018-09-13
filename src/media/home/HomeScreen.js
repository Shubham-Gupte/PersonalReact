import React, { Component } from 'react';
import './HomeScreen.css'
import propic from './IMG_0624.jpeg'

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <div id ="ringSetup">
                <img className="mx-auto rounded-circle" src={propic} alt="" id="indigo"/>
                </div>
            </div>
        );
    }
}
export default HomeScreen