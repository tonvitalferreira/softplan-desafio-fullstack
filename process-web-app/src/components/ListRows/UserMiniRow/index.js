import React, { useState, useEffect } from "react";

import { Row, RowDetails, RowActions } from "./styles";
import { ActionButtonSmallRounded } from "../../FormComponents";
import profileDefaultImage from "../../../assets/img/user-profile.png";

function UserRow(props) {
  const [user, setUser] = useState(props.user);

  useEffect(() => {
    setUser(props.user);
  }, [user]);

  return (
    <Row>
      <img src={profileDefaultImage} />
      <RowDetails>
        <h4>{user ? user.fullName : "..."}</h4>
        <h5>{user ? "@" + user.userName : "..."}</h5>
      </RowDetails>
    </Row>
  );
}

export default UserRow;
