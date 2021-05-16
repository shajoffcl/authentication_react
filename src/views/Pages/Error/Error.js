import React from "react";
import { Link } from "react-router-dom";

export function Error() {
  return (
    <div className="auth-error">
      <h1>Error 404</h1>
      <p>Page is not available.</p>
      <Link to="/">Back to home page</Link>
    </div>
  );
}
