import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogged } from "../../api/APIAuth.js";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    async function checkIfIsLogged() {
      setIsLoading(true);
      let localLogged = await isLogged();
      console.log("islogged: " + localLogged);
      setLogged(localLogged);
      setIsLoading(false);
    }
    checkIfIsLogged();
  }, []);

  let renderWait = () => {
    return <div>please, wait...</div>;
  };

  let renderRoute = () => {
    return (
      <Route
        {...rest}
        render={(props) =>
          logged && restricted ? (
            <Redirect to="/dashboard" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  };

  return <>{isLoading ? renderWait() : renderRoute()}</>;
};

export default PublicRoute;
