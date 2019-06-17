import React from "react";
import "./styles.scss";

class StandartElement extends React.Component {
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="standart-element-container d-flex justify-content-between align-items-center p-2 bg-white border-bottom">
        <div className="elem-cover mr-2 w-50 flex-grow-1">
          <span>{this.props.car.name}</span>
        </div>
        <div className="elem-cover mr-2 w-50 flex-grow-1">
          <span>{this.props.car.modelInfo}</span>
        </div>
        <div className="elem-cover mr-2 w-25 flex-grow-1">
          <span>{this.props.car.year}</span>
        </div>
        <div className="elem-cover mr-2 w-25 flex-grow-1">
          <span>{this.props.car.price}</span>
        </div>
        <div className="elem-cover buttons-cover d-flex w-25 flex-grow-1">
          <button
            className="btn btn-primary btn-sm m-1 text-uppercase"
            onClick={() => {
              this.props.editCar(this.props.index);
            }}
          >
            manage
          </button>
          <button
            className="btn btn-danger btn-sm m-1 mr-0 text-uppercase"
            onClick={() => {
              this.props.deleteCar(this.props.index);
            }}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default StandartElement;
