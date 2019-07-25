import React from "react";
import DisplayPrice from "./DisplayPrice";
import { NavLink } from "react-router-dom";

const MiniRecapMenu = ({ selectedItems, handleDelete }) => {
  return (
    <div style={{ display: "flex" }}>
      <NavLink to="/payment">
        <i class="fas fa-shopping-cart" />
      </NavLink>
      <div>
        {selectedItems.map((item, i) => (
          <div key={i}>
            <DisplayPrice items={selectedItems} />
            <button onClick={e => handleDelete(item)}>
              <i class="fas fa-minus-circle" />
            </button>
            <hr style={{ width: "80%" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniRecapMenu;
