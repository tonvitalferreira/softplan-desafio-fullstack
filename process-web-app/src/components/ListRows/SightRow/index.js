import React, { useState, useEffect } from "react";

import { Row, RowDetails, RowActions } from "./styles";
import profileDefaultImage from "../../../assets/img/user-profile.png";

function UserRow(props) {
  const [sight, setSight] = useState(props.sight);

  useEffect(() => {
    setSight(props.sight);
  }, [props.sight]);

  return (
    <Row>
      <img src={profileDefaultImage} />
      <RowDetails>
        <h3>User</h3>
        <h4>{sight ? (sight.text ? sight.text : "waiting a sight") : "..."}</h4>
      </RowDetails>
    </Row>
  );
}

export default UserRow;
