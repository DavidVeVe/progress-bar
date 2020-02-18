import React from "react";

import ProgressBar from "./ProgressBar";

import Fetch from "node-fetch";

class Data extends React.Component {
  state = {
    data: [],
    loading: false,
    error: null
  };

  fetchData = async () => {
    this.setState({
      loading: true
    });
    try {
      const data = await (
        await Fetch("https://jsonplaceholder.typicode.com/users")
      ).json();

      this.setState({
        loading: false,
        data: data,
        error: null
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  render() {
    if (this.state.loading) {
      return <ProgressBar />;
    }
    return (
      <React.Fragment>
        {this.state.data.map(user => (
          <p>{user.name}</p>
        ))}
        <button onClick={this.fetchData}>Get data</button>
      </React.Fragment>
    );
  }
}

export default Data;
