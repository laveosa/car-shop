import React from "react";
import { connect } from "react-redux";
import SearchArea from "./searchArea";
import { updateSearch } from "../../store/search/actions";

class SearchAreaContainer extends React.Component {
  render() {
    return (
      <SearchArea
        cars={this.props.cars}
        search={this.props.search}
        updateSearch={this.props.updateSearch}
      />
    );
  }
}

const mapStateToProps = function(state) {
  return {
    cars: state.cars,
    search: state.search
  };
};

const mapDispatchToProps = {
  updateSearch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAreaContainer);
