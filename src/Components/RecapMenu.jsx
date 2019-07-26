import React, { Component } from "react";
import DisplayPrice from "../Components/DisplayPrice";
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
    console.log(this.state.purchases);
    if (!this.state.lastOrder) return null;
    return (
      <div>
        <div>
          <h2
            style={{
              textAlign: "center",
              color: "blue",
              fontStyle: "bold"
            }}
          >
            Recapitulatif de la commande Actuelle
          </h2>
          {this.state.lastOrder.articles.map(article => (
            <div style={{ fontStyle: "bold", textAlign: "center" }}>
              <p>{article.title}</p>
              <img src={article.image} alt={article.title} />
            </div>
          ))}
          <div>
            <h3
              style={{ fontStyle: "bold", textAlign: "center", color: "blue" }}
            >
              Prix total :
              <DisplayPrice items={this.state.lastOrder.articles} />
            </h3>
          </div>
          <h3 style={{ fontStyle: "bold", textAlign: "center", color: "blue" }}>
            Numéro de commande :{this.state.lastOrder.orderRef}
          </h3>
        </div>
        <hr />
        <h2
          style={{
            textAlign: "center",
            color: "blue",
            fontStyle: "bold"
          }}
        >
          Historique de commandes
        </h2>
        {this.state.purchases.map((purchase, i) => (
          <div>
            <div>Achat n°{i + 1}</div>
            {purchase.articles.map(article => (
              <div>
                <p>{article.title}</p>
              </div>
            ))}
            <p>{purchase.orderRef}</p>
          </div>
        ))}
      </div>
    );
  }
}
export default Recap;
