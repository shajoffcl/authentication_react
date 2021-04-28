import React, { Component } from "react";
import { PageTitle } from "../components/index";

class Admin extends Component {
  render() {
    return (
      <div>
        <PageTitle title="Admin Page" logout {...this.props}/>
      </div>
    );
  }
}

export default Admin;
