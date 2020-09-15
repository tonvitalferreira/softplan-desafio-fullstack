import React, { useState, useEffect } from "react";

import { Container, ModalCard } from "./styles";
import {
  CardHeader,
  CardHeaderTitle,
  CardHeaderActions,
  Separator,
} from "../../Dashboard/styles";
import { IconSight } from "../../Icons";
import {
  InputBox,
  InputTextArea,
  ActionButton,
  ActionButtonModalClose,
} from "../../FormComponents";
import loadingButonImage from "../../../assets/img/loading.svg";

import { sightAProcess } from "../../../api/APISights";

function ModalCreateSight(props) {
  const [isShow, setIsShow] = useState(props.show);
  const [process, setProcess] = useState(props.process);

  const [isLoading, setIsLoading] = useState(false);
  const [sightResponse, setSightResponse] = useState("");

  let handleSave = async () => {
    setIsLoading(true);
    let sighted = await sightAProcess(process.id, sightResponse);
    console.log(sighted);
    if (sighted) {
      alert("Your sight was sent successfully!");
    } else {
      alert("Error when sending your sight!");
    }

    setProcess(null);
    setIsLoading(false);
    setSightResponse("");
    props.handlerReloadData();
    props.handlerOpenModal(false);
  };

  useEffect(() => {
    setIsShow(props.show);
    setProcess(props.process);
  }, [props.show]);

  return (
    <Container className={isShow ? "visible" : "invisible"}>
      <ModalCard>
        <CardHeader>
          <CardHeaderTitle>
            <IconSight />
            <h2>Sight the process</h2>
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
          style={{ width: "80%", height: 120 }}
        >
          <IconSight />
          <InputTextArea
            className={isLoading ? "loading" : ""}
            value={sightResponse}
            placeholder="sight the process here"
            disabled={isLoading}
            onChange={(e) => {
              setSightResponse(e.target.value);
            }}
          />
        </InputBox>
        <ActionButton
          className={isLoading ? "loading" : ""}
          style={{ width: "80%" }}
          onClick={() => {
            handleSave();
          }}
        >
          <img src={loadingButonImage} />
          <p>Save</p>
        </ActionButton>
      </ModalCard>
    </Container>
  );
}

export default ModalCreateSight;
