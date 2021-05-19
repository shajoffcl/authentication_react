import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { NavLink } from "react-router-dom";
import Divider from "@material-ui/core/Divider";
import {
  MenuList,
  ListItem,
  ListItemText,
  ListItemIcon,
  MenuItem,
} from "@material-ui/core/";
import useStyles from "./Style";

export function TheSideBar(props) {
  const classes = useStyles();
  const { open, handleDrawerClose, res } = props;

  const activeRoute = (routeName) => {
    return props.location.pathname === routeName ? true : false;
  };

  return (
    <>
      <Drawer
        variant="temporary"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <MenuList>
          <NavLink
            to="/admin"
            style={{ textDecoration: "none", color: "black" }}
          >
            <MenuItem
              selected={activeRoute("/admin")}
              onClick={handleDrawerClose}
            >
              <ListItemText primary="Home" />
            </MenuItem>
            <Divider />
          </NavLink>
          {res.map((prop, idx) => {
            return (
              <NavLink
                key={idx}
                to={`${prop.module_link}?module_id=${prop.module_id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem
                  selected={activeRoute(prop.module_link)}
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary={prop.navigation_name} />
                </MenuItem>
                <Divider />
              </NavLink>
            );
          })}
        </MenuList>
      </Drawer>
    </>
  );
}
