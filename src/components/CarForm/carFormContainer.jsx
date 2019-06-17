import React from "react";
import { connect } from "react-redux";
import CarForm from "./carForm";
import { addNewCar } from "../../store/cars/actions";

class CarFormContainer extends React.Component {
  render() {
    return <CarForm addNewCar={this.props.addNewCar} />;
  }
}

const mapStateToProps = function(state) {
  return {
    cars: state.cars
  };
};

const mapDispatchToProps = {
  addNewCar
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarFormContainer);
