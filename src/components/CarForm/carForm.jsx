import React from "react";
import "./styles.scss";

class CarForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.generateHandler = this.generateHandler.bind(this);
    this.createHandler = this.createHandler.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
  }
  componentWillMount() {}
  render() {
    return (
      <div id="CarFormComponent">
        <div className="car-form-container p-3 container">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <span className="asterix">*</span>Name:
              </span>
            </div>
            <input
              className="form-control"
              type="text"
              ref="carName"
              placeholder="enter car name..."
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Info:</span>
            </div>
            <input
              className="form-control"
              type="text"
              ref="modelInfo"
              placeholder="enter model info..."
            />
          </div>
          <div className="d-flex">
            <div className="input-group mb-3 mr-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Year:</span>
              </div>
              <input
                className="form-control"
                type="number"
                ref="carYear"
                placeholder="enter car year..."
              />
            </div>
            <div className="input-group mb-3 mr-2 ml-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Fuel Type:</span>
              </div>
              <select
                className="custom-select"
                defaultValue="gasolin"
                ref="fuelType"
              >
                <option value="gasolin">Gasolin</option>
                <option value="diesel">Diesel</option>
                <option value="gas">Gas</option>
              </select>
            </div>
            <div className="input-group mb-3 mr-2 ml-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Car Type:</span>
              </div>
              <select
                className="custom-select"
                defaultValue="sedan"
                ref="carType"
              >
                <option value="sedan">Sedan</option>
                <option value="truck">Truck</option>
                <option value="jeep">Jeep</option>
                <option value="minivan">Minivan</option>
              </select>
            </div>
            <div className="input-group mb-3 ml-2">
              <div className="input-group-prepend">
                <span className="input-group-text">Price: $</span>
              </div>
              <input
                className="form-control"
                type="number"
                ref="carPrice"
                placeholder="enter price..."
              />
            </div>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Extras: </span>
            </div>
            <textarea
              className="form-control"
              aria-label="extras"
              rows="6"
              style={{ resize: "none" }}
              ref="carExtras"
              placeholder="enter extra information..."
            />
          </div>
          <div className="input-group d-flex justify-content-end buttons-area">
            <button
              className="m-1 btn btn-primary text-uppercase"
              onClick={this.generateHandler}
            >
              generate
            </button>
            <button
              className="m-1 btn btn-primary text-uppercase"
              onClick={this.createHandler}
            >
              create
            </button>
            <button
              className="m-1 btn btn-secondary text-uppercase"
              onClick={this.clearHandler}
            >
              clear
            </button>
          </div>
        </div>
      </div>
    );
  }
  generateHandler() {
    this.refs.carName.value = "Nissan";
    this.refs.carYear.value = "2020";
    this.refs.modelInfo.value = "Z360 nizmo";
    this.refs.fuelType.value = "gasolin";
    this.refs.carType.value = "sedan";
    this.refs.carPrice.value = "80000";
    this.refs.carExtras.value =
      "ABS, Air Conditioning, Cruise control, Sleeping cabin";
  }
  createHandler() {
    const carModel = {
      name: this.refs.carName.value,
      modelInfo: this.refs.modelInfo.value,
      vehicleType: this.refs.carType.value,
      year: this.refs.carYear.value,
      fuelType: this.refs.fuelType.value,
      price: this.refs.carPrice.value,
      extras: this.refs.carExtras.value,
      images: null
    };

    this.props.addNewCar(carModel);
    this.clearHandler();
  }
  clearHandler() {
    this.refs.carName.value = null;
    this.refs.carYear.value = null;
    this.refs.modelInfo.value = null;
    this.refs.fuelType.value = "gasolin";
    this.refs.carType.value = "sedan";
    this.refs.carPrice.value = null;
    this.refs.carExtras.value = null;
  }
}

export default CarForm;
