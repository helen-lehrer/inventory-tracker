import React from "react";
import NewInventoryForm from "./NewInventoryForm";
import InventoryList from "./InventoryList";
import InventoryDetail from "./InventoryDetail";
import Menu from "./Menu";
import EditInventoryForm from "./EditInventoryForm";

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

  handleDeletingInventory = (id) => {
    const newMainInventoryList = this.state.mainInventoryList.filter(inventory => inventory.id !== id);
    this.setState({
      mainInventoryList: newMainInventoryList,
      selectedInventory: null
    })
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
    const menu = [
      {
      name: "Ambrosia",
      origin: "USA",
      description: "Loose leaf ice tea blend with hints of cinnamon and citrus",
      type: "Black teas and spices",
      price: "$2000"
      },
      {
        name: "Fruit Blend",
        origin: "USA",
        description: "Strong, tart, red infusion with minty and citrus herbal flavors",
        type: "Herbal",
        price: "$2500"
      },
      {
        name: "Dragon Well",
        origin: "Hangzhou, China",
        description: "Hand processed and pan fired with mellow, classic green flavor",
        type: "Green tea",
        price: "$3000"
      }
    ];
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditInventoryForm inventory = {this.state.selectedInventory} onEditInventory = {this.handleEditingInventoryInList} />
      buttonText = "Return to Inventory List"
    }
    else if(this.state.selectedInventory != null) {
      currentlyVisibleState = <InventoryDetail
      inventory = {this.state.selectedInventory}
      menu = {menu}
      onClickingDelete = {this.handleDeletingInventory}
      onClickingEdit = {this.handleEditClick} onClickingBuy = {this.handleBuyInventory}/>
      buttonText = "Return To Inventory List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <React.Fragment>
        <Menu teaOne={menu[0]} teaTwo={menu[1]} teaThree={menu[2]} />
        <NewInventoryForm onNewInventoryCreation={this.handleAddingNewInventoryToList} />
  
      </React.Fragment>;
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