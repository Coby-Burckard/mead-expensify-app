/*
  Higher Order Component (HOC) - A component (HOC) that renders another component
    goal - to reuse code
      render highjacking
      prop manipulation
      abstract state
*/

import React from "react";
import ReactDom from "react-dom";

// Component
const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// Higher Order Component (Admin Info)
//   regular function that returns a higher order function
const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>ADMIN WARNING: PRIVALEDGED INFO</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuth = WrappedComponent => {
  return props => (
    <div>
      {!props.isAuth ? (
        <p>please log in to view</p>
      ) : (
        <WrappedComponent {...props} />
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuth(Info);

ReactDom.render(
  <AuthInfo isAuth={true} info="this is the info prop's info" />,
  document.getElementById("app")
);
