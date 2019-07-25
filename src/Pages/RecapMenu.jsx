import React, { Component } from "react";
import ChoiceMenu from "../Components/ChoiceMenu";
import RecapMenu from "../Components/RecapMenu";
import ChoiceAliment from "../Components/ChoiceAliment";
import axios from "axios";

const apiHandler = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true
});

class Recap extends Component {
  state = {
    purchases: []
  };

  componentDidMount() {
    apiHandler
      .get("/api/users/last-order")
      .then(res => {
        console.log(res, "update please ?");
        const purchases = res.data.purchases;
        this.setState({
          purchases,
          lastOrder: purchases[purchases.length - 1]
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log("called first time");
    if (!this.state.lastOrder) return null;
    return (
      <div>
        <div>
          <h2>Recapitulatif de la commande Actuelle</h2>
          {this.state.lastOrder.articles.map(article => (
            <div>
              <p>{article.title}</p>
              <p>{article.image}</p>
              <p>{article.price}</p>
            </div>
          ))}
          <p>{this.state.lastOrder.orderRef}</p>
        </div>
        <div>
          <h2>Historique de commandes</h2>
          {this.state.purchases.map((purchase, i) => (
            <div>
              <div>Purchase n°{i + 1}</div>
              {purchase.articles.map(article => (
                <div>
                  <p>{article.title}</p>
                </div>
              ))}
              <p>{purchase.orderRef}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Recap;
