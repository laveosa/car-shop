import React from "react";
import "./styles.scss";

export default function(props) {
  return (
    <div className="card-container card">
      <div className="image-cover">
        {props.carInfo.images ? (
          <img src={props.carInfo.images[0]} alt="car" />
        ) : (
          <img
            src="https://img.autonation.com/~/media/images/autonation/creditapplication/credit-default.jpg"
            alt="car"
          />
        )}
      </div>
      <div className="card-header">
        <span>{props.carInfo.name}</span>
      </div>
      <div className="card-body">
        <p>{props.carInfo.modelInfo}</p>
        <h6>Vehicle type:</h6>
        <p>{props.carInfo.vehicleType}</p>
        <h6>Fuel type:</h6>
        <p>{props.carInfo.fuelType}</p>
        <h6>Year:</h6>
        <p>{props.carInfo.year}</p>
        <h6>Extras:</h6>
        <p>{props.carInfo.extras}</p>
      </div>
      <div className="card-footer">
        {props.carInfo.price ? (
          <span>${props.carInfo.price}</span>
        ) : (
          <span>none</span>
        )}
      </div>
    </div>
  );
}
