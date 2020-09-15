import React, { useState, useEffect } from "react";

import { Container, ModalCard, ListUsers, ListUsersHeader } from "./styles";
import {
  CardHeader,
  CardHeaderTitle,
  CardHeaderActions,
  Separator,
} from "../../Dashboard/styles";
import { IconProcesses } from "../../Icons";
import { ActionButton, ActionButtonModalClose } from "../../FormComponents";
import SelectUserMiniRow from "../../ListRows/SelectUserMiniRow";

import { getAllUsers } from "../../../api/APIUsers";

function ModalSelectUsers(props) {
  const [isShow, setIsShow] = useState(props.show);
  const [allUsers, setAllUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);

  let loadAllUsers = async () => {
    let fatchUsers = await getAllUsers();
    setAllUsers(fatchUsers);
  };

  useEffect(() => {
    setIsShow(props.show);
    loadAllUsers();
  }, [props.show]);

  return (
    <Container className={isShow ? "visible" : "invisible"}>
      <ModalCard>
        <CardHeader>
          <CardHeaderTitle>
            <IconProcesses />
            <h2>Select users</h2>
          </CardHeaderTitle>
          <CardHeaderActions>
            <ActionButtonModalClose
              sytle={{ width: 40 }}
              onClick={() => {
                props.handleOpenModal(false);
                props.handleUpdateUI(selectedUsers);
              }}
            >
              <p>x</p>
            </ActionButtonModalClose>
          </CardHeaderActions>
        </CardHeader>
        <Separator />
        <ListUsers>
          {allUsers.map((user, key) => {
            return (
              <SelectUserMiniRow
                key={key}
                user={user}
                isSelected={selectedUsers.includes(user)}
                handleSetSelectedUsers={setSelectedUsers}
              />
            );
          })}
        </ListUsers>
      </ModalCard>
    </Container>
  );
}

export default ModalSelectUsers;
