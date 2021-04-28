import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";
import { PageTitle } from "../components/index";
import { authenticationService } from "../services/index";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };

    if (authenticationService.currentUserValue) {
      this.props.history.push("/");
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleLogIn = async () => {
    const { username, password } = this.state;
    try {
      const res = await authenticationService.Login(username, password);
      console.log("user", res);
      this.props.history.push("/");
    } catch (err) {
      console.log("signin", err);
      this.setState({ error: err });
    }
  };

  render() {
    return (
      <Container fluid className="main-content-container">
        <Row noGutters className="page-header">
          <PageTitle title="Sign-In" {...this.props}/>
        </Row>
        <Row noGutters className="form-container center">
          <Col className="form-input-container box">
            <input
              type="text"
              className="input-field"
              placeholder="username"
              name="username"
              onChange={(e) => this.handleChange(e)}
            />
            <input
              type="password"
              className="input-field"
              placeholder="password"
              name="password"
              onChange={(e) => this.handleChange(e)}
            />
            <button className="button" onClick={this.handleLogIn}>
              SIGN IN
            </button>
            <Col className="error">{this.state.error}</Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SignIn;
