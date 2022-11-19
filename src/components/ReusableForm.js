import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Type of Tea:</label>
          <select name="name"> 
            <option value="Ambrosia">Ambrosia Tea</option>
            <option value="Fruit Blend">Fruit Blend</option>
            <option value="Dragon Well">Dragon Well</option>
          </select>
        <label>Quantity of Sacks</label>
        <input
          type="number"
          name="quantity"
          min="0" />
      <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;