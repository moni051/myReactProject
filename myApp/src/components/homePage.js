import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
import { Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <div id="page-wrapper">
        	<div id="page" className="container">
        		<h2>Welcome to my website</h2>
        		<p>There are two project, first is <strong>Weather Forcasting App</strong> to keep <br/>
        			the knowledge about weather <br/>
        			and second one is <strong>Video Search Engine</strong>, which is a dynamic resourse <br/> where you can
        			 search, learn related to real world.<br/> Have fun :) <br/>Just click on images to visit particular App...</p>
               <div className="wthrWrapper">
                <Link to="/weather">
                  <img src="images/img3.jpg" alt="" className="wthr" />
                </Link>
               </div>
               <div className="youtubeWrapper">
                <Link to="/videoSearch">
                  <img src="images/you.jpg" alt="" className="youtube" />
                </Link>
               </div>
        	</div>
        </div>
        <div id="copyright" className="container-ftr">
    	     <p>Design by Moni.</p>
        </div>
      </div>
    );
  }
}
