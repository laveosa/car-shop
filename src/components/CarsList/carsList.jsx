import React from "react";
import Card from "../Card/card";
import ContentBlock from "../../layoutElements/ContentBlock/contentBlock";
import InnerElement from "../../layoutElements/ContentBlock/innerElements/StandartElement/standartElement";
import "./styles.scss";

class CarsList extends React.Component {
  componentWillMount() {
    // console.log(this.props);
  }
  render() {
    return this.viewsRender(this.props.editView);
  }
  viewsRender = editView => {
    if (editView) {
      return (
        <div className="cars-list-container d-flex flex-wrap">
          <ContentBlock
            subtitles={["name", "model", "year", "price", ""]}
            title="Cars list"
          >
            {this.props.cars.map((car, index) => {
              if (this.FilterWorker.filter(car)) {
                return (
                  <InnerElement
                    key={index}
                    index={index}
                    car={car}
                    editCar={this.manageHandler}
                    deleteCar={this.props.deleteCar}
                  />
                );
              }

              return false;
            })}
          </ContentBlock>
        </div>
      );
    } else {
      return (
        <div className="cars-list-container d-flex flex-wrap">
          {this.props.cars.map((car, index) => {
            if (this.FilterWorker.filter(car)) {
              return <Card key={index} carInfo={car} />;
            }

            return false;
          })}
        </div>
      );
    }
  };
  manageHandler = index => {
    console.log(index);
  };
  FilterWorker = {
    filterText: car => {
      if (!this.props.search.text || this.props.search.text.length <= 3) {
        return true;
      }

      if (
        car.extras &&
        car.extras.toLowerCase().search(this.props.search.text) !== -1
      ) {
        return true;
      }

      if (
        car.modelInfo &&
        car.modelInfo.toLowerCase().search(this.props.search.text) !== -1
      ) {
        return true;
      }

      if (
        car.name &&
        car.name.toLowerCase().search(this.props.search.text) !== -1
      ) {
        return true;
      }

      return false;
    },
    filterName: car => {
      if (this.props.search.name === null) {
        return true;
      }

      if (car.name === this.props.search.name) {
        return true;
      }

      return false;
    },
    filterYear: car => {
      if (this.props.search.year === null) {
        return true;
      }

      if (car.year === this.props.search.year) {
        return true;
      }

      return false;
    },
    filterFuelType: car => {
      if (this.props.search.fuelType === null) {
        return true;
      }

      if (car.fuelType === this.props.search.fuelType) {
        return true;
      }

      return false;
    },
    filter: car => {
      var condition = false;

      condition = this.FilterWorker.filterText(car);

      if (condition) {
        condition = this.FilterWorker.filterName(car);
      }

      if (condition) {
        condition = this.FilterWorker.filterYear(car);
      }

      if (condition) {
        condition = this.FilterWorker.filterFuelType(car);
      }

      return condition;
    }
  };
}

export default CarsList;
