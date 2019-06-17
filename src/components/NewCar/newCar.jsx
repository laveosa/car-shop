import React from "react";
import CarFormContainer from "../CarForm/carFormContainer";
import "./styles.scss";

class NewCar extends React.Component {
  render() {
    return (
      <div id="NewCarComponent">
        <div className="new-car-container">
          <CarFormContainer />
        </div>
      </div>
    );
  }
}

export default NewCar;
