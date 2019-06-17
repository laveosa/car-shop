import React from "react";
import { PageStructure, Left, Right } from "../PageStructure/pageStructure";
import PageTitle from "../PageTitle/pageTitle";
import SearchAreaContainer from "../SearchArea/searchAreaContainer";
import PageLogo from "../../media/icons/car-key.svg";
import CarsListContainer from "../CarsList/carsListContainer";
import "./styles.scss";

export default function(props) {
  return (
    <PageStructure>
      <Left>
        <PageTitle logo={PageLogo} title="Edit car" />
        <SearchAreaContainer />
      </Left>
      <Right>
        <CarsListContainer editView={true} />
      </Right>
    </PageStructure>
  );
}
