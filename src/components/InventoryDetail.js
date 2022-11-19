import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props){
  const { inventory, menu, onClickingBuy, onClickingDelete } = props;
  let details = null;
  console.log(inventory)
  // function handleRestockFormSubmission(event){
  //   event.preventDefault();
  //   props.onClickingRestock({
  //     name: inventory.name,
  //     description: inventory.decription,
  //     quantity: inventory.quantity + parseInt(event.target.quantity.value),
  //     id: inventory.id
  //   });
  // }
  if(inventory.name === "Ambrosia") {
    details = menu[0]
  }
  else if(inventory.name === "Fruit Blend") {
    details = menu[1]
  }
  else if(inventory.name === "Dragon Well") {
    details = menu[2]
  }

  if(inventory.quantity === 0){
    return (
      <React.Fragment>
      <h2>Inventory Detail</h2>
      <h3>{inventory.name} - <em>{inventory.quantity}</em></h3>
      <p>{details.origin}</p>
      <p>{details.description}</p>
      <p>{details.type}</p>
      <p>{details.price}</p>
      <p>This Item has been sold out!</p>
      {/* <form onSubmit={ handleRestockFormSubmission }>
      <label>Restock Value</label>
      <input name="quantity" type="number" placeholder="0" min="0"></input>
      <button type="submit">Restock</button>
      </form>
      <button onClick={ props.onClickingEdit }>Update Inventory</button> */}
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <h2>Inventory Detail</h2>
      <h3>{inventory.name} - <em>{inventory.quantity} lbs</em></h3>
      <p>{details.origin}</p>
      <p>{details.description}</p>
      <p>{details.type}</p>
      <p>{details.price}</p>
      <button onClick={ () => onClickingBuy(inventory) }>Buy</button>
      <button onClick={ props.onClickingEdit }>Update</button>
      <button onClick={()=> onClickingDelete(inventory.id)}>Delete</button>
      <hr/>
    </React.Fragment>
  );
}



InventoryDetail.propTypes = {
  menu: PropTypes.array,
  inventory: PropTypes.object,
  inventoryName: PropTypes.string,
  inventoryOrigin: PropTypes.string,
  inventoryDetils: PropTypes.string,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  // onClickingRestock: PropTypes.func
};

export default InventoryDetail;