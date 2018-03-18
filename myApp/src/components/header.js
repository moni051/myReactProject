import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div id="header-wrapper">
      	<div id="header" className="container-hdr">
      		<div id="logo">
            <Link to="/">
      	       <img src="/images/img7.jpg" alt="" className="earth" />
            </Link>
      		</div>
      		<div id="menu">
      			<ul>
      				<li><a href="https://www.facebook.com/PIETCampusOnline" target="_blank">
                          <span className="fa fa-facebook fa-lg"></span></a></li>
      				<li><a href="https://www.facebook.com/PIETCampusOnline" target="_blank">
                          <span className="fa fa-twitter  fa-lg"></span></a></li>
      				<li><a href="https://plus.google.com/u/0/+PietCoInpanipat/" target="_blank">
                          <span className="fa fa-google-plus  fa-lg"></span></a></li>
      			</ul>
      		</div>
      	</div>
      </div>
    );
  }
}
