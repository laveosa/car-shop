import React from "react";
import "./styles.scss";

class SearchArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fuelType: null
    };
  }
  componentDidMount() {
    this.clearHandler();
  }
  render() {
    return (
      <div className="search-area-container p-2">
        <form>
          <div className="form-group">
            <label className="text-light">car data:</label>
            <input
              className="form-control"
              type="text"
              placeholder="enter any car data"
              ref="searchText"
              onKeyDown={this.searchHandler}
            />
          </div>
          <div className="form-group">
            <label className="text-light">car name:</label>
            <select className="form-control" ref="name">
              <option value={null}>all</option>
              {this.getCarsName()}
            </select>
          </div>
          <div className="form-group">
            <label className="text-light">car year:</label>
            <select className="form-control" ref="year">
              <option value={null}>all</option>
              {this.getCarsYear()}
            </select>
          </div>
          <div className="form-group">
            <label className="text-light">price:</label>
            <div className="d-flex">
              <input
                className="form-control mr-1 flex-grow-1 w-100"
                type="number"
                placeholder="min"
                ref="priceFrom"
                onKeyDown={this.searchHandler}
              />
              <input
                className="form-control ml-1 flex-grow-1 w-100"
                type="number"
                placeholder="max"
                ref="priceTo"
                onKeyDown={this.searchHandler}
              />
            </div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="fuel"
              value="gasolin"
              onChange={this.fuelTypeHasChanhed}
              onKeyDown={this.searchHandler}
            />
            <label className="form-check-label text-light">Gasolin</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="fuel"
              value="diesel"
              onChange={this.fuelTypeHasChanhed}
              onKeyDown={this.searchHandler}
            />
            <label className="form-check-label text-light">Diesel</label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="fuel"
              value="gas"
              onChange={this.fuelTypeHasChanhed}
              onKeyDown={this.searchHandler}
            />
            <label className="form-check-label text-light">Gas</label>
          </div>
          <div className="buttons-area d-flex justify-content-between">
            <div
              className="btn btn-secondary mr-1 flex-grow-1 w-100 text-uppercase"
              onClick={this.clearHandler}
            >
              <span>clear</span>
            </div>
            <div
              className="btn btn-primary ml-1 flex-grow-1 w-100 text-uppercase"
              onClick={this.searchHandler}
            >
              <span>search</span>
            </div>
          </div>
        </form>
      </div>
    );
  }
  clearHandler = () => {
    const tmpState = {
      text: null,
      name: null,
      year: null,
      priceFrom: null,
      priceTo: null,
      fuelType: null
    };

    this.refs.searchText.value = "";
    this.refs.name.value = "all";
    this.refs.year.value = "all";
    this.refs.priceFrom.value = "";
    this.refs.priceTo.value = "";
    this.setState({
      fuelType: null
    });

    this.props.updateSearch(tmpState);
  };
  searchHandler = () => {
    const tmpState = {
      text:
        this.refs.searchText.value.length > 0
          ? this.refs.searchText.value
          : null,
      name: this.refs.name.value === "all" ? null : this.refs.name.value,
      year: this.refs.year.value === "all" ? null : this.refs.year.value,
      priceFrom:
        this.refs.priceFrom.value.length > 0 ? this.refs.priceFrom.value : null,
      priceTo:
        this.refs.priceTo.value.length > 0 ? this.refs.priceTo.value : null,
      fuelType: this.state.fuelType
    };

    this.props.updateSearch(tmpState);
  };
  getCarsName = () => {
    let tmpCarsList = [];

    this.props.cars.forEach(function(car, index) {
      let condition = true;

      for (let j = 0; j < tmpCarsList.length; j++) {
        if (tmpCarsList[j].name === car.name) {
          condition = false;
          return;
        }
      }

      if (condition) {
        tmpCarsList.push(car);
      }
    });

    tmpCarsList = this.sortByName(tmpCarsList);

    return tmpCarsList.map(function(car, index) {
      return (
        <option key={index} value={car.name}>
          {car.name}
        </option>
      );
    });
  };
  getCarsYear = () => {
    let tmpCarsList = [];

    this.props.cars.forEach(function(car, index) {
      let condition = true;

      for (let j = 0; j < tmpCarsList.length; j++) {
        if (tmpCarsList[j].year === car.year) {
          condition = false;
          return;
        }
      }

      if (condition && car.year && car.year.length > 0) {
        tmpCarsList.push(car);
      }
    });

    tmpCarsList = this.sortByNumber(tmpCarsList);

    return tmpCarsList.map(function(car, index) {
      return (
        <option key={index} value={car.year}>
          {car.year}
        </option>
      );
    });
  };
  sortByNumber = list => {
    let _list = [...list];

    _list.sort((a, b) => {
      return a.year - b.year;
    });

    return _list;
  };
  sortByName = list => {
    let _list = [...list];

    _list.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }

      return 0;
    });

    return _list;
  };
  fuelTypeHasChanhed = event => {
    this.setState({
      fuelType: event.target.value
    });
  };
}

export default SearchArea;
