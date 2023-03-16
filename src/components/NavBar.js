import React from "react";
import tea from "./../img/tea.png";
import './../index.css';

function NavBar(){
  const style = {
    all: {
    backgroundColor: '#96be25',
    fontFamily: 'Amatic SC',
    width: 'auto'
    },
    heading: {
      padding: '10px'
    }
  }
  return (
  <React.Fragment>
    <div style={style.all}> 
      <nav id="navbar">
        <h1 style={style.heading}>The Tao of Tea Inventory Tracker</h1>
      </nav>
    </div>
    <img src={tea} style={style.img} width="100px"/>
  </React.Fragment>
  )
}

export default NavBar;