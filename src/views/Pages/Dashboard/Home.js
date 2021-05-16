import React from 'react';
import { authenticationService } from "../../../_services/index";
import {PageTitle} from "../../../components/index";

export function AdminHome() {

  const currentUser = authenticationService.currentUserValue;
  return (
    <div>
      <h1>Welcome</h1>
      <PageTitle>{currentUser['user_name']}</PageTitle>
    </div>
  )
}

