import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import homer from "./img/homer.png"
import sap from "./img/sap.png"
import home from "./img/home.png"
import back from "./img/back.png"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="banner">
            <img id="back" src={back}/>
            <img id="home" src={home}/>
            <img id="homer" src={homer}/>
            <img id="sap" src={sap}/>
            <p id="index">Inbox</p>
        </div>
		   	<div className="block">
		     </div>
      </div>
    );
  }
}

export default App;
