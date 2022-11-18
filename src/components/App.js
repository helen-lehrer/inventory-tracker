import React from "react";
import InventoryControl from "./InventoryControl";
import NavBar from "./NavBar";

function App(){
  return (
    <React.Fragment>
      <NavBar />
      <InventoryControl />
    </React.Fragment>
  );
}

export default App;
