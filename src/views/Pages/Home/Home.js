import React from "react";
import { authenticationService } from "../../../_services/index";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Copyright } from "../../../components/index";

export function Home(props) {
  
  const currentUser = authenticationService.currentUserValue;

  const handleLogOut = () => {
    authenticationService.Logout();
    props.history.push("/login");
  };

  return (
    <div className="home-page-container">
      <div className="home-page-nav">
        <h3>
          Hi, <span className="username">{currentUser["user_name"]}</span>
        </h3>
        <span className="exit-icon" onClick={handleLogOut}>
          <ExitToAppIcon />
        </span>
      </div>
      <div className="home-page-main">
        <h1 className="welcome">WELCOME</h1>
      </div>
      <Copyright />
    </div>
  );
}
