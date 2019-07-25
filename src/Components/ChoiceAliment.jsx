import React from "react";
import "../style/MenuPage.css";

const ChoiceAliment = ({ title, items, handleAdd, handleDelete }) => {
  if (!items) {
    return <h1>No items</h1>;
  }
  console.log(items);
  return (
    <div>
      <h1>{title}</h1>
      <div className="alim">
        {items.map(item => (
          <div className="menu-case-ali">
            <div>
              <img src={item.image} alt={item.name} />
              <p style={{textAlign:"center"}}>{item.title}</p>
            </div>

            <div className="price-plus">
            <p style={{fontWeight:"bold"}}>
                <span>{item.price}</span>€
              </p>
              <button onClick={e => handleAdd(item)}>Plus</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChoiceAliment;
