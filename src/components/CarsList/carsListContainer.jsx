import React from "react";
import { connect } from "react-redux";
import CarsList from "./carsList";
import { editCar, deleteCar } from "../../store/cars/actions";
import "./styles.scss";

class CarsListContainer extends React.Component {
  render() {
    return (
      <CarsList
        cars={this.props.cars}
        search={this.props.search}
        editView={this.props.editView}
        editCar={this.props.editCar}
        deleteCar={this.props.deleteCar}
      />
    );
  }
}

const SetStateToProps = function(state) {
  return {
    cars: state.cars,
    search: state.search
  };
};

const mapDispatchToProps = {
  editCar,
  deleteCar
};

export default connect(
  SetStateToProps,
  mapDispatchToProps
)(CarsListContainer);
