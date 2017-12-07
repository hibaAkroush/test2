import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './list.css';
import x from './img/x.png'

const numbers = [{
	header: "Gulfnews",
	text:"new headquarters",
	bla: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	time:"8:30 AM",
	pic : x
},
{
	header: "Gulfnews",
	text:"new headquarters",
	bla: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	time:"7:50 AM",
	pic : x
},
{
	header: "Hiba is doing a task!",
	text:"new headquarters",
	bla: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	time:"7:30 AM",
	pic : x
},
{
	header: "Hiba is doing a task!",
	text:"new headquarters",
	bla: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	time:"7:30 AM",
	pic : x}];

const listItems = numbers.map((number) =>
  <li class="list">
  	<div className="text">
  		<div class="head"><p>{number.header}</p></div>
  		<p id="text">{number.text}</p>
  		<p id="bla">{number.bla}</p>
  	</div>

  	<div className="small">
  		<div class="divx">
		<a href="https://www.youtube.com/watch?v=SzoIJdjR5wA"><img class="x" src={x}/></a>
		</div>
		<p>{number.time}</p>
  	</div>
  </li>
);
ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('list2')
);