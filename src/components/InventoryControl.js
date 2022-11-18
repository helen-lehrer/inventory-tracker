import React from "react";
import NewInventoryForm from './NewInventoryForm';
import InventoryList from './InventoryList';
import InventoryDetail from "./InventoryDetail";
import Menu from "./Menu";
import EditInventoryForm from "./EditInventoryForm";
// import EditInventoryForm from './EditInventoryForm';

class InventoryControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainInventoryList: [],
      selectedInventory: null,
      selectedName: null,
      selectedOrigin: null,
      selectedDescription: null,
      editing: false
    };
  }

  handleEditingInventoryInList = (inventoryToEdit) => {
    const editedMainInventoryList = this.state.mainInventoryList
    .filter(inventory => inventory.id !== this.state.selectedInventory.id)
    .concat(inventoryToEdit);
    this.setState({
      mainInventoryList: editedMainInventoryList,
      editing: false,
      selectedInventory: null
    })
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleDisplayMenuDetails = (inventory) => {
    if(this.state.selectedInventory != null){
      this.setState({
        selectedName: inventory.name
      });
    }
    if (this.state.selectedName === "Ambrosia") {
      this.setState({
        selectedOrigin: "USA",
        selectedDescription: "Loose leaf ice tea blend with hints of cinnamon and citrus"
      });
    }
    else if (this.state.selectedName === "Fruit Blend") {
      this.setState({
        selectedOrigin: "USA",
        selectedDescription: "Strong, tart, red infusion with minty and citrus herbal flavors"
      });
    }
    else if (this.state.selectedName === "Dragon Well") {
      this.setState({
        selectedOrigin: "Hangzhou, China",
        selectedDescription: "Hand processed and pan fired with mellow, classic green flavor"
      });
    }
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

   handleBuyInventory = (inventory) => {
    inventory.quantity-= 1;
    this.setState({
      selectedInventory: inventory
    });
    } 

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditInventoryForm inventory = {this.state.selectedInventory} onEditInventory = {this.handleEditingInventoryInList} />
      buttonText = "Return to Inventory List"
    }
    else if(this.state.selectedInventory != null) {
      currentlyVisibleState = <InventoryDetail
      inventory = {this.state.selectedInventory} inventoryName = {this.state.selectedName} inventoryOrigin = {this.state.selectedOrigin} inventoryDescription = {this.state.selectedDescription} onDisplayingDetails = {this.handleDisplayMenuDetails} onClickingDelete = {this.handleDeletingInventory}
      onClickingEdit = {this.handleEditClick} onClickingBuy = {this.handleBuyInventory} onClickingRestock = {this.handleRestockInventory}/>
      buttonText = "Return To Inventory List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList}/>
      buttonText = "Return to Inventory List";
    }
    else {
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