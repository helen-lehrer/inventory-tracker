import React from "react";
import PropTypes from "prop-types";

function Inventory(props){
  return (
    <React.Fragment>
      <div onClick={() => props.whenInventoryClicked(props.id)}>
      <h3>{props.name}</h3>
      <p>{props.origin}</p>
      <p>{props.description}</p>
      <p><em>{props.quantity}</em></p>
      </div>
    </React.Fragment>
  )
}

Inventory.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenInventoryClicked: PropTypes.func
}

export default Inventory;