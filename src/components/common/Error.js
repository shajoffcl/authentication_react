import React from "react";
import { Link } from "react-router-dom";

export function Error() {
  return (
    <div className="auth-error">
      <h1>Authorized Error!</h1>
      <p>You are not authorized to access the data on this page.</p>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
