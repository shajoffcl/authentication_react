import React from "react";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./Styles";

export function PaperRender(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} onClick={props.handleClick} className="scale">
        <h5>{props.module}</h5>
      </Paper>
    </div>
  );
}
