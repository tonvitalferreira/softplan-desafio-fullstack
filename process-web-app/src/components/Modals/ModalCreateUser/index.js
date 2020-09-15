import React, { useState, useEffect } from "react";

import { Container, ModalCard } from "./styles";
import {
  CardHeader,
  CardHeaderTitle,
  CardHeaderActions,
  Separator,
} from "../../Dashboard/styles";
import { IconUser, IconPassword, IconCheck } from "../../Icons";
import {
  InputBox,
  InputText,
  ActionButton,
  ActionButtonModalClose,
  Wrapper,
  Item,
  BoxItem,
} from "../../FormComponents";
import loadingButonImage from "../../../assets/img/loading.svg";
import { createUser, updateUser } from "../../../api/APIUsers";

function ModalSaveUser(props) {
  const [isShow, setIsShow] = useState(props.show);
  const [selectedUser, setSelectedUser] = useState(props.selectedUser);

  const [isADM, setIsADM] = useState(false);
  const [isTriator, setIsTriator] = useState(false);
  const [isFinalizator, setIsFinalizator] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [permission, setPermission] = useState("ATF");

  let handleSaveUser = async () => {
    if (!isLoading) {
      setLoading(true);
      let createdUser = isEditing
        ? await updateUser(
            selectedUser.id,
            fullName,
            userName,
            password,
            permission
          )
        : await createUser(fullName, userName, password, permission);

      if (createdUser) {
        alert("User " + (isEditing ? "edited" : "created") + " successfully!");
      } else {
        alert(
          "Erro when " + (isEditing ? "editing" : "creating") + " your user!"
        );
      }

      setLoading(false);
      props.handlerReloadData();
      props.handlerOpenModal(false);
    }
  };

  let handlerAddPermissionADM = (add) => {
    setIsADM(add);
    let newPermission = permission.replace("A", "");
    setPermission(newPermission + (add ? "A" : ""));
  };

  let handlerAddPermissionTriator = (add) => {
    setIsTriator(add);
    let newPermission = permission.replace("T", "");
    setPermission(newPermission + (add ? "T" : ""));
  };

  let handlerAddPermissionFinalizator = (add) => {
    setIsFinalizator(add);
    let newPermission = permission.replace("F", "");
    setPermission(newPermission + (add ? "F" : ""));
  };

  let handleEditing = (user) => {
    if (user) {
      setFullName(user.fullName);
      setUserName(user.userName);
      setPassword("");
      setIsADM(user.permission.includes("A"));
      setIsTriator(user.permission.includes("T"));
      setIsFinalizator(user.permission.includes("F"));
      setPermission(user.permission);
      setIsEditing(true);
    } else {
      setFullName("");
      setUserName("");
      setPassword("");
      setIsADM(false);
      setIsTriator(false);
      setIsFinalizator(false);
      setPermission("");
      setIsEditing(false);
    }
  };

  useEffect(() => {
    setIsShow(props.show);
    setSelectedUser(props.selectedUser);
    handleEditing(props.selectedUser);
  }, [props.show]);

  return (
    <Container className={isShow ? "visible" : "invisible"}>
      <ModalCard>
        <CardHeader>
          <CardHeaderTitle>
            <IconUser />
            <h2>
              {selectedUser
                ? "Editing @" + selectedUser.userName
                : "Create User"}
            </h2>
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
        <InputBox style={{ width: "80%" }}>
          <IconUser />
          <InputText
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="full name"
          />
        </InputBox>
        <InputBox style={{ width: "80%" }}>
          <IconUser />
          <InputText
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="user name"
          />
        </InputBox>
        <InputBox
          className={isEditing ? "disabled" : ""}
          disabled={isEditing}
          style={{ width: "80%" }}
        >
          <IconPassword />
          <InputText
            className={isEditing ? "disabled" : ""}
            disabled={isEditing}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </InputBox>
        <Wrapper>
          <Item
            className={isADM ? "checked" : "unchecked"}
            onClick={(event) => handlerAddPermissionADM(!isADM)}
          >
            <BoxItem className={isADM ? "checked" : "unchecked"}>
              <IconCheck />
            </BoxItem>
            <p>Admin</p>
          </Item>
          <Item
            className={isTriator ? "checked" : "unchecked"}
            onClick={(event) => handlerAddPermissionTriator(!isTriator)}
          >
            <BoxItem className={isTriator ? "checked" : "unchecked"}>
              <IconCheck />
            </BoxItem>
            <p>Triator</p>
          </Item>
          <Item
            className={isFinalizator ? "checked" : "unchecked"}
            onClick={(event) => handlerAddPermissionFinalizator(!isFinalizator)}
          >
            <BoxItem className={isFinalizator ? "checked" : "unchecked"}>
              <IconCheck />
            </BoxItem>
            <p>Finalizator</p>
          </Item>
        </Wrapper>
        <ActionButton
          className={isLoading ? "loading" : ""}
          onClick={() => {
            if (!isLoading) {
              handleSaveUser();
            }
          }}
        >
          <img src={loadingButonImage} />
          <p>SAVE</p>
        </ActionButton>
      </ModalCard>
    </Container>
  );
}

export default ModalSaveUser;
