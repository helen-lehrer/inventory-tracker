import React from "react";
import MerchControl from "./MerchControl";
import Navbar from "./Navbar";

function App(){
  return (
    <React.Fragment>
      <Navbar />
      <InventoryControl />
    </React.Fragment>
  );
}

export default App;
