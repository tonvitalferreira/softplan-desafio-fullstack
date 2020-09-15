import React, { useState, useEffect } from "react";

import { Container, ModalCard, CardActions } from "./styles";
import {
  CardHeader,
  CardHeaderTitle,
  CardHeaderActions,
  Separator,
} from "../../Dashboard/styles";
import { IconUser } from "../../Icons";
import { ActionButton, ActionButtonModalClose } from "../../FormComponents";
import loadingButonImage from "../../../assets/img/loading.svg";
import { deleteUser } from "../../../api/APIUsers";

function ModalSaveUser(props) {
  const [isShow, setIsShow] = useState(props.show);
  const [selectedUser, setSelectedUser] = useState(props.selectedUser);

  const [isLoading, setLoading] = useState(false);

  let handleDelete = async () => {
    if (!isLoading) {
      setLoading(true);
      let deletedUser = await deleteUser(selectedUser.id);

      if (deletedUser) {
        alert("Usuário deletado com sucesso!");
      } else {
        alert("Erro ao deletar seu usuário!");
      }

      setLoading(false);
      props.handlerReloadData();
      props.handlerOpenModal(false);
    }
  };

  useEffect(() => {
    setIsShow(props.show);
    setSelectedUser(props.selectedUser);
  }, [props.show]);

  return (
    <Container className={isShow ? "visible" : "invisible"}>
      <ModalCard>
        <CardHeader>
          <CardHeaderTitle>
            <IconUser />
            <h2>{selectedUser ? selectedUser.fullName : "..."}</h2>
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
        <h3
          style={{
            width: "80%",
            textAlign: "center",
            margin: "auto",
            marginTop: 10,
            color: "#c42132",
          }}
        >
          Do you really want to delete this user?
        </h3>
        <CardActions>
          <ActionButton
            className={isLoading ? "loading" : ""}
            style={{ width: "45%" }}
            onClick={() => {
              handleDelete();
            }}
          >
            <img src={loadingButonImage} />
            <p>YES</p>
          </ActionButton>
          <ActionButton
            className={isLoading ? "loading" : ""}
            style={{ width: "45%", backgroundColor: "#ccc" }}
          >
            <img src={loadingButonImage} />
            <p>NO</p>
          </ActionButton>
        </CardActions>
      </ModalCard>
    </Container>
  );
}

export default ModalSaveUser;
