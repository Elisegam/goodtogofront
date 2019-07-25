import React, { Component } from "react";
import { getAllMenu, getAllAliments } from "../apiCalls/apiCalls";
import ChoiceMenu from "../Components/ChoiceMenu";
import ChoiceAliment from "../Components/ChoiceAliment";
import RecapMenu from "../Components/RecapMenu";
import MiniRecapMenu from "../Components/MiniRecapMenu";
import "../style/MenuPage.css";

export default class Menu extends Component {
  state = {
    user: [],
    aliments: [],
    menus: [],
    selectedMenus: [],
    selectedAliments: []
  };
  componentDidMount() {
    Promise.all([getAllAliments(), getAllMenu()])
      .then(res => {
        this.setState({
          aliments: res[0].data,
          menus: res[1].data
        });
      })
      .catch(err => console.log(err));
  }

  getAdultMenus = () => {
    return this.state.menus.filter(menu => menu.category === "adult");
  };
  getKidMenus = () => {
    return this.state.menus.filter(menu => menu.category === "kid");
  };

  handleAdd = menu => {
    // const tmpselectedMenus = [...this.state.selectedMenu];
    // tmpselectedMenus.push(menu);
    // this.setState({selectedMenus: tmpselectedMenus})
    this.setState({ selectedMenus: [...this.state.selectedMenus, menu] });
  };

  // handleAdd = item => {
  //   this.setState({ selectedAliments: [...this.state.selectedAliments, item] });
  // };

  // static getDerivedStateFromProps(props,state)

  // handleDelete = index => {
  //   const selectedAliments = [...this.state.selectedAliments];
  //   selectedAliments.splice(index, 1);
  //   this.setState({ selectedAliments });
  // };

  render() {
    return (
      <div>
        <h1>Menu Page</h1>
        <div className="big-container">
          <div className="renderall">
            {/* <ChoiceMenu title="Individual Picks" items={this.state.aliments} /> */}
            <ChoiceMenu
              title="Menus"
              handleAdd={this.props.handleCurrentMenu}
              menus={this.getAdultMenus()}
            />
            <ChoiceMenu
              title="Kids Menus"
              handleAdd={this.props.handleCurrentMenu}
              handleDelete={this.handleDelete}
              menus={this.getKidMenus()}
            />
            <ChoiceAliment
              title="On the go"
              handleAdd={this.props.handleCurrentMenu}
              handleDelete={this.props.handleDelete}
              items={this.state.aliments}
            />
          </div>
          <div className="asideRecap">
            <h1
              style={{
                textAlign: "center",
                color: "white",
                textShadow: "grey 2px 2px"
              }}
            >
              Recap Commande
            </h1>
            <div className="display-price">
              <div className="bigrecap">
                <RecapMenu
                  handleDelete={this.props.handleDelete}
                  selectedItems={this.props.currentMenus}
                />
              </div>
            </div>
          </div>
          <div className="minirecap">
            <MiniRecapMenu
              handleDelete={this.handleDelete}
              selectedItems={this.props.currentMenus}
            />
          </div>
        </div>
      </div>
    );
  }
}
