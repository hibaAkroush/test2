import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Left.css';
import x from './img/x.png'

const numbers = [{
	header: "my super market burned down!",
	text:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	time:"30 minutes ago",
	bla: "sed do",
},
{
	header: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	text:"",
	bla: "adipiscing",
	time:"37 minutes ago"
},
{
	header: "consectetur adipiscing ipsum incididunt elit",
	text:"",
	bla: "eiusmod",
	time:"50 minutes ago"
},
{
	header: "you are the best husband ever",
	text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	time:"52 minutes ago",
	bla: "tempor",
}];

const listItems = numbers.map((number) =>
  <li class="list">
	<div class="side">
	</div>
	<div class="containerN">
		<div class="divx">
		<a href="https://www.youtube.com/watch?v=SzoIJdjR5wA"><img class="x" src={x}/></a>
		</div>
		<div class="head"><p>{number.header}</p></div>
	  	<div class="body">
		  	<img class="imgnoti" src={number.pic}/>
		  	<p>{number.text}</p>
	  	</div>
		<div class="time"><p>{number.bla}{ " - " }{number.time}</p></div>
	</div>
  </li>
);
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('left')
);



