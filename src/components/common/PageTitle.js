import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col } from "shards-react";
import { authenticationService } from '../../services/index';

function PageTitle(props) {
  const { title, subtitle, className, logout } = props;
  const classes = classNames(className, "center");

  const handleClick = () => {
    authenticationService.Logout();
    props.history.push('/login');
  }

  return (
    <Col xs="12" sm="4" className={classes}>
      <span className="text-uppercase page-subtitle">{subtitle}</span>
      <h3 className="page-title">{title}</h3>
      {logout? <button onClick={handleClick}>Logout</button>: ""}
    </Col>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default PageTitle;
