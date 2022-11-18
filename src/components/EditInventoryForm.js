import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditInventoryForm(props) {
  const { inventory } = props;

  function handleEditingInventoryFormSubmission(event){
    event.preventDefault();
    props.onEditInventory({
      name: event.target.name.value,
      quantity: parseInt(event.target.quantity.value * 130),
      id: inventory.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditingInventoryFormSubmission}
      buttonText="Update Item" />
    </React.Fragment>
  )
}

EditInventoryForm.propTypes = {
  inventory: PropTypes.object,
  onEditInventory: PropTypes.func
}

export default EditInventoryForm;