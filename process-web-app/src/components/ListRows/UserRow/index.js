import React, { useEffect, useState } from "react";

import { Row, RowDetails, RowActions } from "./styles";
import profileDefaultImage from "../../../assets/img/user-profile.png";
import { ActionButtonSmallRounded } from "../../FormComponents";
import { IconEdit, IconDelete } from "../../Icons";

function UserRow(props) {
  const [userProps, setUserProps] = useState(props);

  useEffect(() => {
    setUserProps(props);
  }, [props]);

  return (
    <Row>
      <img src={profileDefaultImage} />
      <RowDetails>
        <h3>{userProps.user.fullName}</h3>
        <h4>@{userProps.user.userName}</h4>
      </RowDetails>
      <RowActions>
        <ActionButtonSmallRounded
          style={{ backgroundColor: "#FA782D" }}
          onClick={() => {
            userProps.handleSelectUser(userProps.user);
            userProps.handleOpenEditModal(true);
          }}
        >
          <IconEdit />
        </ActionButtonSmallRounded>
        <ActionButtonSmallRounded
          style={{ backgroundColor: "#d92558" }}
          onClick={() => {
            userProps.handleSelectUser(userProps.user);
            userProps.handleOpenDeleteModal(true);
          }}
        >
          <IconDelete />
        </ActionButtonSmallRounded>
      </RowActions>
    </Row>
  );
}

export default UserRow;
