import React from "react";
import SVGMidifierClass from "../../classes/SVGModifierClass";
import "./styles.scss";

var SVGMidifier = new SVGMidifierClass();

class PageTitle extends React.Component {
  componentDidMount() {
    SVGMidifier.transform();
  }
  render() {
    return (
      <div className="page-title-container d-flex p-2">
        <div className="logo-cover d-flex align-items-center mr-2">
          <img className="svg" src={this.props.logo} alt="car" />
        </div>
        <div className="title-cover">
          <h2 className="text-light mb-0">{this.props.title}</h2>
        </div>
      </div>
    );
  }
}

export default PageTitle;
