import React from "react";
import "./styles.scss";

class ContentBlock extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="content-block-container w-100 m-2 border-dark border container p-0 rounded">
        <div className="header-cover bg-dark d-flex align-items-center justify-content-between p-2">
          {this.HeaderElements.showTitle(
            this.props.title ? this.props.title.length : null
          )}
          {this.HeaderElements.showSearch(
            this.props.search ? this.props.search : null
          )}
          {this.HeaderElements.showPagination(
            this.props.pagination ? this.props.pagination : null
          )}
          {this.HeaderElements.showButton(
            this.props.btn ? this.props.btn.length : null
          )}
        </div>
        <div className="subtitles-cover d-flex bg-secondary align-items-center justify-content-between p-0 pl-2 pr-2 m-0">
          {this.props.subtitles.map((elem, index) => {
            return (
              <div key={index} className={this.setSubtitlesStyles(index)}>
                <span>{elem}</span>
              </div>
            );
          })}
        </div>
        <div className="content-cover d-flex flex-column">
          {this.props.children}
        </div>
      </div>
    );
  }
  setSubtitlesStyles = index => {
    if (index <= 1) {
      return "subtitle mr-3 text-light w-50 flex-grow-1";
    } else {
      return "subtitle mr-3 text-light w-25 flex-grow-1";
    }
  };
  HeaderElements = {
    showTitle: condition => {
      if (condition) {
        return (
          <div className="title-cover h3 text-light m-0 mr-2">
            <span>{this.props.title}</span>
          </div>
        );
      }
    },
    showSearch: condition => {
      if (condition) {
        return (
          <div>
            <span>search</span>
          </div>
        );
      }
    },
    showPagination: condition => {
      if (condition) {
        return (
          <div>
            <span>pagination</span>
          </div>
        );
      }
    },
    showButton: condition => {
      if (condition) {
        return (
          <div className="button-cover">
            <button className="btn btn-primary btn-sm text-uppercase">
              <span>{this.props.btn}</span>
            </button>
          </div>
        );
      }
    }
  };
}

export default ContentBlock;
