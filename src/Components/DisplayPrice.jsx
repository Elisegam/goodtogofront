import React from "react";

const getTotalPrice = items => {
  let totalPrice = 0;
  // for (let i = 0; i < this.state.selectedMenus.length; i++) {
  //   totalPrice += this.state.selectedMenus[i].price;
  // }
  // this.state.selectedMenus.forEach(menu => {
  //   totalPrice += menu.price;
  // });
  for (let item of items) {
    totalPrice += item.price;
  }
  // return this.state.selectedMenus.reduce(
  //   (acc, menu) => (acc += menu.price)
  //  , 0
  // );
  return totalPrice;
};

const DisplayPrice = ({ items }) => {
  const price = getTotalPrice(items);
  return (
    <div>
      <p style={{fontWeight:"bold"}}>
        <span>{price}</span>€
      </p>
    </div>
  );
};

export default DisplayPrice;
