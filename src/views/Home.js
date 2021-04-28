import React, { Component } from "react";
import { PageTitle } from "../components/index";

class Home extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Home Page" logout {...this.props}/>
      </div>
    );
  }
}

export default Home;
