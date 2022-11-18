import React from "react";
import PropTypes from "prop-types";



function InventoryDetail(props){
  const { inventory } = props;
  console.log(props)
  // function handleRestockFormSubmission(event){
  //   event.preventDefault();
  //   props.onClickingRestock({
  //     name: inventory.name,
  //     description: inventory.decription,
  //     quantity: inventory.quantity + parseInt(event.target.quantity.value),
  //     id: inventory.id
  //   });
  // }


  // if(inventory.quantity === 0){
  //   return (
  //     <React.Fragment>
  //     <h2>Inventory Detail</h2>
  //     <h3>{inventory.name} - <em>{inventory.quantity}</em></h3>
  //     <p>{inventory.description}</p>
  //     <p>This Item has been sold out!</p>
  //     <form onSubmit={ handleRestockFormSubmission }>
  //     <label>Restock Value</label>
  //     <input name="quantity" type="number" placeholder="0" min="0"></input>
  //     <button type="submit">Restock</button>
  //     </form>
  //     <button onClick={ props.onClickingEdit }>Update Inventory</button>
  //     </React.Fragment>
  //   )
  // }

  return (
    <React.Fragment>
      <h2>Inventory Detail</h2>
      <h3>{inventory.name} - <em>{inventory.quantity}</em></h3>
      <p>{inventory.description}</p>
      {/* <button onClick={ () => onClickingBuy(inventory) }>Buy</button>
      <button onClick={ props.onClickingEdit }>Update Inventory</button>
      <button onClick={()=> onClickingDelete(inventory.id)}>Delete Inventory Item</button> */}
      <hr/>
    </React.Fragment>
  );
}



InventoryDetail.propTypes = {
  inventory: PropTypes.object,
  // onClickingDelete: PropTypes.func,
  // onClickingEdit: PropTypes.func,
  // onClickingBuy: PropTypes.func,
  // onClickingRestock: PropTypes.func
};

export default InventoryDetail;