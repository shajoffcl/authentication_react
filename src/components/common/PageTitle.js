import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

export function PageTitle(props) {
  return (
    <Typography component="h2" variant="h6" color="secondary" gutterBottom>
      {props.children}
    </Typography>
  );
}

PageTitle.propTypes = {
  children: PropTypes.node,
};
