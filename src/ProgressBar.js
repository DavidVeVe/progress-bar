import React from "react";

import "./styles/bar.css";

class ProgressBar extends React.Component {
  state = {
    percent: 10
  };

  render() {
    return (
      <React.Fragment>
        <div className="trail">
          <div
            style={{ width: this.state.percent + "%" }}
            className="bar"
          ></div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProgressBar;
