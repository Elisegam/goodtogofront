import React, { Component } from "react";
import Map from "../Components/map";
import Footer from "../Components/Footer";

export default class Home extends Component {
  handleClick = message => {
    console.log(message);
  };
  render() {
    return (
      <div>
        <img
          style={{ width: "100%" }}
          src="https://res.cloudinary.com/inga-bacher/image/upload/v1563806669/final_project_GoodToGO/nouveautes_i4rw2s.jpg"
          alt="news"
        />
        <div className="home">
          <div className="sub-home">
            <h2>Choose Your Burger King !</h2>
            <div className="sub-sub-home">
              <i className="fas fa-home" />
              <p>
                BURGER KING NEMOURS A6 Aire Sce de l'Autoroute A6 77140 Nemours
              </p>
            </div>
            <div className="sub-sub-home">
              <i className="fas fa-home" />
              <p>
                BURGER KING BEAUNE A6 Aire Beaune Merceuil Ou Beaune Tailly
                autoroute A6, 21190 Mercueil
              </p>
            </div>
            <div className="sub-sub-home">
              <i className="fas fa-home" />
              <p>
                BURGER KING LYON TAPONAS A6 Aire De, Autoroute du Soleil, 69220
                Taponas
              </p>
            </div>
          </div>
          <div>
            <Map handleClick={this.handleClick} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
