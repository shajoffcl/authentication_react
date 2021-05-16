import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { Copyright } from "../components/index";
import useStyles from "./Style";
import { TheHeader, TheContent, TheSideBar } from "./index";
import {authenticationService, admin} from "../_services/index";

export function TheLayout(props) {
  const currentUser = authenticationService.currentUserValue;

  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [res, setRes] = React.useState([]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    async function fetchData() {
      try {
        const data = await admin.getModuleData();
        setRes(data.modules);
      } catch (err) {
        setError(true);
      }
    }
    fetchData();
  }, []);

  if(!currentUser) return null;

  return (
    <div className={classes.root}>
      <CssBaseline />
        <TheHeader handleDrawerOpen={handleDrawerOpen} open={open} {...props} />
        <TheSideBar
          handleDrawerClose={handleDrawerClose}
          open={open}
          res={res}
          {...props}
        />
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <TheContent {...props} />
          </Container>
        </main>
    </div>
  );
}
