import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";
import Menu from "./Menu";

function NewInventoryForm(props){
  function handleNewInventoryFormSubmission(event) {
    event.preventDefault();
    props.onNewInventoryCreation({
      name: event.target.name.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <Menu />
      <ReusableForm
      formSubmissionHandler={handleNewInventoryFormSubmission}
      buttonText="Create" />
    </React.Fragment>
  );
}

NewInventoryForm.propTypes = {
  OnNewInventoryCreation: PropTypes.func
};

export default NewInventoryForm;