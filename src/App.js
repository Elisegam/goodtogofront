// import React from "react";
import React, { Component } from "react";
import Home from "./Pages/Home";
import NavMain from "./Components/NavMain";
import Payment from "./Pages/Payment";
import PageAuth from "./Pages/Auth";
import { Switch, Route, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faUserCircle,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import Menu from "./Pages/MenuPage";
import Recap from "./Pages/RecapMenu";
import ProtectedRoute from "./auth/ProtectedRoute";
import "./style/App.css";
import "./style/MenuPage.css";
// import Signin from "./Components/SignIn";
// import Dashboard from "./dashboard/Dashboard";

library.add(faUser, faAngleRight, faUserCircle, faSignOutAlt);

export class App extends Component {
  state = {
    currentMenus: []
  };

  handleCurrentMenu = menu => {
    this.setState({ currentMenus: [...this.state.currentMenus, menu] });
  };

  handleDelete = index => {
    const currentMenus = [...this.state.currentMenus];
    currentMenus.splice(index, 1);
    this.setState({ currentMenus });
    //Probleme dans le cas ou dans le tableau il y aurait plusieurs elements avec la meme _id
    // const filtered = this.state.selectedMenus.filter(items => {
    //   return items._id !== menu._id;
    // });
    // this.setState({ selectedMenus: filtered });
  };

  render() {
    return (
      <>
        <NavMain />
        <div className="App">
          <Switch>
            <Redirect from="/home" to="/" />
            <Route exact path="/" component={Home} />
            <Route
              path="/menu"
              render={props => (
                <Menu
                  {...props}
                  handleDelete={this.handleDelete}
                  currentMenus={this.state.currentMenus}
                  handleCurrentMenu={this.handleCurrentMenu}
                />
              )}
            />
            <Route path={["/signin", "/signup"]} component={PageAuth} />
            <Route path="/recap" component={Recap} />
            {/* <Route path="/payment" component={Payment} /> */}
            {/* <ProtectedRoute path="/payment" component={Payment} /> */}
            {/* <ProtectedRoute path="/payment" component={Payment} /> */}
            <Route
              path="/payment"
              render={props => (
                <Payment {...props} currentMenus={this.state.currentMenus} />
              )}
            />
            {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
