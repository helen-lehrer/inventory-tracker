import React from "react";
import PropTypes from "prop-types";

function InventoryDetail(props){
  const { inventory, menu, onClickingBuy, onClickingDelete } = props;
  let details = null;
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
    // const origin = menu[0].origin;
    // const description = menu[0].description;
    // const type = menu[0].type;
    // const price = menu[0].price
  }
  else if(inventory.name === "Fruit Blend") {
    details = menu[1]
    // const origin = menu[1].origin;
    // const description = menu[1].description;
    // const type = menu[1].type;
    // const price = menu[1].price
  }
  else if(inventory.name === "Dragon Well") {
    details = menu[2]
    // const origin = menu[2].origin;
    // const description = menu[2].description;
    // const type = menu[2].type;
    // const price = menu[2].price
  }

  const details = null;

  if(inventory.quantity === 0){
    return (
      <React.Fragment>
      <h2>Inventory Detail</h2>
      <h3>{inventory.name} - <em>{inventory.quantity}</em></h3>
      <p>{origin}</p>
      <p>{description}</p>
      <p>{type}</p>
      <p>{price}</p>
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
      {/* {onDisplayingDetails( inventory )}; */}
      <h2>Inventory Detail</h2>
      <h3>{inventory.name} - <em>{inventory.quantity} lbs</em></h3>
      <p>{details.origin}</p>
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
  // onClickingDelete: PropTypes.func,
  // onClickingEdit: PropTypes.func,
  // onClickingBuy: PropTypes.func,
  // onClickingRestock: PropTypes.func
};

export default InventoryDetail;