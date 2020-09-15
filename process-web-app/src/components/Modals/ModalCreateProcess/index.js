import React, { useState, useEffect } from "react";

import {
  Container,
  ModalCard,
  ListUsers,
  ListUsersHeader,
  ListUsersAddButton,
} from "./styles";
import {
  CardHeader,
  CardHeaderTitle,
  CardHeaderActions,
  Separator,
} from "../../Dashboard/styles";
import { IconProcesses, IconEdit } from "../../Icons";
import {
  InputBox,
  InputText,
  ActionButton,
  ActionButtonModalClose,
} from "../../FormComponents";

import ModalSelectUser from "../ModalSelectUsers";
import UserMiniRow from "../../ListRows/UserMiniRow";
import loadingButonImage from "../../../assets/img/loading.svg";
import { saveProcess } from "../../../api/APIProcesses";
import { addSightProcessToUsers } from "../../../api/APISights";

function ModalCreateProcess(props) {
  const [isShow, setIsShow] = useState(props.show);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [showModalSelecteUsers, setShowModalSelecteUsers] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);

  let handleSave = async () => {
    setIsLoading(true);

    let createdProcess = await saveProcess(title, description);
    if (createdProcess) {
      let userList = selectedUsers.map((user) => user.id);
      let addedToUsers = await addSightProcessToUsers(
        createdProcess.id,
        userList
      );
      if (addedToUsers) {
        alert("Process created and assigned to users!");
      } else {
        alert(
          "Process created, but something went wrong when sending to users!"
        );
      }
    } else {
      alert("Error when creating your process!");
    }

    props.handlerReloadData();
    props.handlerOpenModal(false);
  };

  let handleUpdateUI = (users) => {
    if (users) {
      setSelectedUsers(users);
      setShowModalSelecteUsers(false);
    }
  };

  useEffect(() => {
    setIsShow(props.show);
    handleUpdateUI();
  }, [props.show]);

  return (
    <Container className={isShow ? "visible" : "invisible"}>
      <ModalSelectUser
        show={showModalSelecteUsers}
        handleOpenModal={setShowModalSelecteUsers}
        handleUpdateUI={handleUpdateUI}
      />
      <ModalCard>
        <CardHeader>
          <CardHeaderTitle>
            <IconProcesses />
            <h2>Create Process</h2>
          </CardHeaderTitle>
          <CardHeaderActions>
            <ActionButtonModalClose
              sytle={{ width: 40 }}
              onClick={() => {
                props.handlerOpenModal(false);
              }}
            >
              <p>x</p>
            </ActionButtonModalClose>
          </CardHeaderActions>
        </CardHeader>
        <Separator />
        <InputBox
          className={isLoading ? "loading" : ""}
          style={{ width: "80%" }}
        >
          <IconProcesses />
          <InputText
            className={isLoading ? "loading" : ""}
            placeholder="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </InputBox>
        <InputBox
          className={isLoading ? "loading" : ""}
          style={{ width: "80%" }}
        >
          <IconEdit />
          <InputText
            className={isLoading ? "loading" : ""}
            placeholder="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </InputBox>

        <Separator style={{ marginTop: 10, width: "80%" }} />
        <ListUsersHeader>
          <h4 style={{ marginLeft: 35, marginTop: 10 }}>To users:</h4>
          <ListUsersAddButton
            className={isLoading ? "loading" : ""}
            onClick={() => {
              setShowModalSelecteUsers(true);
            }}
          >
            <p>+</p>
          </ListUsersAddButton>
        </ListUsersHeader>
        <ListUsers>
          {selectedUsers.map((user, key) => {
            return <UserMiniRow key={key} user={user} />;
          })}
        </ListUsers>
        <Separator style={{ marginTop: 10, width: "80%" }} />
        <ActionButton
          className={isLoading ? "loading" : ""}
          style={{ width: "80%" }}
          onClick={() => {
            if (!isLoading) {
              handleSave();
            }
          }}
        >
          <img src={loadingButonImage} />
          <p>Save</p>
        </ActionButton>
      </ModalCard>
    </Container>
  );
}

export default ModalCreateProcess;
