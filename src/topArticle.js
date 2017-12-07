import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './topArticle.css';
import pic from "./img/homer.png"
import one from "./img/1.jpg"

import two from "./img/2.jpg"
import three from "./img/3.png"

const element = (
	<div class="container">
		<h3 id="topArticleTitle">Adnoc's new headquarters</h3>
		<div id="icon">
				<div>
				<img id= "pic" src= {pic}/>
				</div>

				<div className="textsmall">
					<h3>Gulfnews</h3>			
					<p>19:14 November 2,2016</p>
					<p>To: adonic</p>
					<p>Cc: </p>				
				</div>

		</div>
		<div className = "slide">
				<img id= "one" src= {one}/>
				<img id= "two" src= {two}/>
				<img id= "three" src= {three}/>
		</div>
	</div>
	);
ReactDOM.render(
  element,
  document.getElementById('topArticle')
);