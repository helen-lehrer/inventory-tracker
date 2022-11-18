import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div>
        <h1>Menu</h1>
        <p><em>All tea is sold in 130 lb sacks.</em></p>
        <ul>
          <li>
            <h3>Ambrosia</h3>
            <p>Origin: </p><em>USA</em>
            <p>Description:</p><em>Loose leaf ice tea blend with hints of cinnamon and citrus</em>
            <p>Type: </p><em>Black teas and spices</em>
          </li>
          <li>
            <h3>Fruit Blend</h3>
            <p>Origin: </p><em>USA</em>
            <p>Description:</p><em>Strong, tart, red infusion with minty and citrus herbal flavors</em>
            <p>Type: </p><em>Herbal</em>
          </li>
          <li>
            <h3>Dragon Well</h3>
            <p>Origin: </p><em>Hangzhou, China</em>
            <p>Description:</p><em>Hand processed and pan fired with mellow, classic green flavor</em>
            <p>Type: </p><em>Green tea</em>
          </li>
        </ul>
      </div>
      <form onSubmit={props.formSubmissionHandler}>
        <label>Type of Tea:</label>
          <select value="1">Ambrosia Tea</select>
          <select value="2">Fruit Blend</select>
          <select value="3">Dragon Well</select>
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