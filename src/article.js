import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './article.css';

const element = (
	<div class="art">
	<p class ="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
	<p class ="lorem"> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
	</div>
	);
ReactDOM.render(
  element,
  document.getElementById('article')
);