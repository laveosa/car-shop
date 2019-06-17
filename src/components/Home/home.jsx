import React from "react";
import { PageStructure, Left, Right } from "../PageStructure/pageStructure";
import PageTitle from "../PageTitle/pageTitle";
import SearchAreaContainer from "../SearchArea/searchAreaContainer";
import CarsListContainer from "../CarsList/carsListContainer";
import LogoImage from "../../media/icons/car-multiple.svg";
import "./styles.scss";

export default function(props) {
  return (
    <PageStructure>
      <Left>
        <PageTitle logo={LogoImage} title="Cars List" />
        <SearchAreaContainer />
      </Left>
      <Right>
        <CarsListContainer />
      </Right>
    </PageStructure>
  );
}
