import React from "react";
import { PageStructure, Left, Right } from "../PageStructure/pageStructure";
import PageTitle from "../PageTitle/pageTitle";
import LogoImage from "../../media/icons/car.svg";
import NewCar from "../NewCar/newCar";
import "./styles.scss";

export default function(props) {
  return (
    <PageStructure>
      <Left>
        <PageTitle logo={LogoImage} title="Add new car" />
      </Left>
      <Right>
        <NewCar />
      </Right>
    </PageStructure>
  );
}
