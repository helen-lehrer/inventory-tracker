import React from "react";

function Menu(props){
const { teaOne, teaTwo, teaThree } = props;
return (
<React.Fragment>
  <h1>Menu</h1>
  <p><em>All tea is sold in 130 lb sacks.</em></p>
  <ul>
    <li>
      <h3>{teaOne.name}</h3>
      <p>Origin: </p><em>{teaOne.origin}</em>
      <p>Description:</p><em>{teaOne.description}</em>
      <p>Type: </p><em>{teaOne.type}</em>
      <p>Price: </p><em>{teaOne.price}</em>
    </li>
    <li>
      <h3>{teaTwo.name}</h3>
      <p>Origin: </p><em>{teaTwo.origin}</em>
      <p>Description:</p><em>{teaTwo.description}</em>
      <p>Type: </p><em>{teaTwo.type}</em>
      <p>Price: </p><em>{teaTwo.price}</em>
    </li>
    <li>
      <h3>{teaThree.name}</h3>
      <p>Origin: </p><em>{teaThree.origin}</em>
      <p>Description:</p><em>{teaThree.description}</em>
      <p>Type: </p><em>{teaThree.type}</em>
      <p>Price: </p><em>{teaThree.price}</em>
    </li>
  </ul>
</React.Fragment>
  );
}

export default Menu;