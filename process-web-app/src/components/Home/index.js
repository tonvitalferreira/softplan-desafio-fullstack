import React, { useState } from 'react';

import {
  Container,
  Card,
  CardTitle,
  CardBody,
  Content,
  CardActions,
  Button,
} from './styles';

import {
  IconAdmin,
  IconTriator,
  IconFinalizator
} from '../Icons';

import ModalSignIn from '../ModalSignIn';

function Home() {

  const [showModalSignIn, setShowModalSignIn] = useState(false);
  const [selectedUserType, setSelectedUserType] = useState("");

  let handlerGoTo = (userType) => {
    setSelectedUserType(userType);
    setShowModalSignIn(true);
  }

  return (
    <Container>
      {showModalSignIn ? <ModalSignIn
        selectedUserType={selectedUserType}
      /> : null}
      <Card>
        <CardTitle>
          Bem vindo à Process WEB APP!
        </CardTitle>
        <CardBody>
          <Content>
            <span>Entrar como:</span>
            <CardActions>
              <Button onClick={() => handlerGoTo('admin')}>
                <IconAdmin />
                <span>Administador</span>
              </Button>
              <Button onClick={() => handlerGoTo('triator')}>
                <IconTriator />
                <span>Triador</span>
              </Button>
              <Button onClick={() => handlerGoTo('finalizator')}>
                <IconFinalizator />
                <span>Finalizador</span>
              </Button>
            </CardActions>
          </Content>
        </CardBody>
      </Card>
    </Container>

  );
}

export default Home;