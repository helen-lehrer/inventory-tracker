import React from "react";
import PropTypes from "prop-types";

function Inventory(props){
  return (
    <React.Fragment>
      <div onClick={() => props.whenInventoryClicked(props.id)}>
        <h3>{props.name}</h3>
        <p><em>{props.quantity} lbs</em></p>
      </div>
    </React.Fragment>
  )
}

Inventory.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenInventoryClicked: PropTypes.func
}

export default Inventory;