import React from "react";
import tea from "./../img/tea.png";
import './../index.css';

function NavBar(){
  const style = {
    all: {
    backgroundColor: '#4e7a05',
    fontFamily: 'Amatic SC',
    paddingTop: '20',
    }
  }
  return (
  <React.Fragment>
      <div style={style.all}> 
    <nav>
      <h1>The Tao of Tea Inventory Tracker</h1>
    </nav>
    </div>
    <img src={tea} style={style.img} width="100px"/>
  </React.Fragment>
  )
}

export default NavBar;