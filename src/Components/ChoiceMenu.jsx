import React from "react";
import "./../style/MenuPage.css";

const ChoiceMenu = ({ title, menus, handleAdd, handleDelete }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div className="menu">
        {menus.map(menu => (
          <div className="menu-case">
            <div>
              <img src={menu.image} alt={menu.name} />
              <p className="title">{menu.title}</p>
            </div>

            <p className="description">{menu.description}</p>
            <div className="price-plus">
              <p style={{ fontWeight: "bold" }}>
                <span>{menu.price}</span>€
              </p>
              <button onClick={e => handleAdd(menu)}>Commander</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoiceMenu;
