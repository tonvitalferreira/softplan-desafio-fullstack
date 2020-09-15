import React, { useState, useEffect } from "react";

import { Row, RowDetails, RowActions, Item } from "./styles";
import profileDefaultImage from "../../../assets/img/user-profile.png";
import { IconCheck } from "../../Icons";

function UserRow(props) {
  const [user, setUser] = useState(props.user);
  const [isSelected, setIsSelected] = useState(false);

  let updateIsSelected = () => {
    setIsSelected(props.isSelected);
  };

  useEffect(() => {
    setUser(props.user);
    updateIsSelected();
  }, [user]);

  return (
    <Row>
      <RowActions>
        <Item
          className={isSelected ? "checked" : "unchecked"}
          onClick={(event) => {
            setIsSelected(!isSelected);
            if (isSelected) {
              props.handleSetSelectedUsers((prevArray) =>
                prevArray.filter((item) => item.id !== user.id)
              );
            } else {
              props.handleSetSelectedUsers((prevArray) => [...prevArray, user]);
            }
          }}
        >
          <IconCheck />
        </Item>
      </RowActions>
      <img src={profileDefaultImage} />
      <RowDetails>
        <h4>{user ? user.fullName : "..."}</h4>
        <h5>{user ? "@" + user.userName : "..."}</h5>
      </RowDetails>
    </Row>
  );
}

export default UserRow;
