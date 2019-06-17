import React, { Component } from "react";
// import Banner from "../Banner/banner";
import Navigation from "../Navigation/navigations";
import "./styles.scss";

class Header extends Component {
  render() {
    return (
      <div id="HeaderComponent">
        <div className="header-container">
          {/* <Banner /> */}
          <Navigation />
        </div>
      </div>
    );
  }
}

export default Header;
