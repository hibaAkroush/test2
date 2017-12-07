import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import homer from "./img/homer.png"
import sap from "./img/sap.png"
import home from "./img/home.png"
import back from "./img/back.png"
import right from './right'
import list from './list'
import topArticle from "./topArticle"
import article from "./article"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="banner">
            <a href=""><img id="back" src={back}/></a>
            <a href=""><img id="home" src={home}/></a>
            <a href=""><img id="homer" src={homer}/></a>
            <a href=""><img id="sap" src={sap}/></a>
            <p id="index">Inbox</p>
        </div>
		   	<div className="block">
          <div className="grey">
            <p id="allItems">All Items ( 100 )</p>
          </div>
		    </div>
      </div>
    );
  }
}

export default App;
