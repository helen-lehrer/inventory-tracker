import React from "react";
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetail from "./InventoryDetail";
// import EditInventoryForm from './EditInventoryForm';

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedInventory: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedInventory != null){
      this.setState({
        formVisibleOnPage: false,
        selectedInventory: null,
        editing: false
      });
    } else {
      this.setState(prevState =>({formVisibleOnPage: !prevState.formVisibleOnPage}))
    }
  }

  handleAddingNewInventoryToList = (newInventory) => {
    const newMainInventoryList = this.state.mainInventoryList.concat(newInventory);
    this.setState({mainInventoryList: newMainInventoryList, formVisibleOnPage: false })
  }

  handleChangingSelectedInventory = (id) => {
    const selectedInventory = this.state.mainInventoryList.filter(inventory => inventory.id === id)[0];
    this.setState({selectedInventory: selectedInventory});
   }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedInventory != null) {
      currentlyVisibleState = <InventoryDetail
      merch = {this.state.selectedInventory} onClickingDelete = {this.handleDeletingInventory}
      onClickingEdit = {this.handleEditClick} onClickingBuy = {this.handleBuyInventory} onClickingRestock = {this.handleRestockInventory}/>
      buttonText = "Return To Inventory List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList}/>
      buttonText = "Return to Inventory List";
    } else {
      currentlyVisibleState = <InventoryList inventoryList={this.state.mainInventoryList} onInventorySelection={this.handleChangingSelectedInventory} />
      buttonText = "Add Inventory Item";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
      );
  }
}
export default InventoryControl;