import React, { useEffect } from "react";
import './index.css';
import { NavLink } from 'react-router-dom'

const Navigation = (props) => {
  useEffect(() => {
 
    const searchButton = document.getElementById("search")
    //get input value after user presses enter and pass it to the parent
    searchButton.addEventListener("keyup",e => {
     //make a fetch to the /video endpoint passing the user query
    
    })
  });
  
  return (
    <>
      <div id="HCA-navigation">
        <p>HCA Video Library</p>
        <div id="video-buttons-container" >
       
          <NavLink to='/' id="covidlist" className="video-buttons">Covid-19 Videos</NavLink>
      
          <NavLink to='/allvideos' id="videos" className="video-buttons">All Videos</NavLink>
    
        </div>
      
          <input type="search"  placeholder="Search" id="search"/>
       <div id="HCA-user"> 
        <p >Welcome Terrence Spicer-Williams</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
