import React from "react";
import "./styles.scss";

class PageStructure extends React.Component {
  render() {
    return (
      <div className="page-structure-container d-flex">
        <div className="page-left-side-container flex-grow-1 bg-dark">
          {this.props.children[0]}
        </div>
        <div className="page-right-side-container flex-grow-1">
          {this.props.children[1]}
        </div>
      </div>
    );
  }
}

class Left extends React.Component {
  render() {
    return (
      <div className="page-left-side d-flex flex-column">
        {this.props.children}
      </div>
    );
  }
}

class Right extends React.Component {
  render() {
    return (
      <div className="page-right-side d-flex flex-column">
        {this.props.children}
      </div>
    );
  }
}

export { PageStructure, Left, Right };
