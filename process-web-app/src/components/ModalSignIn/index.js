import React from 'react';

// import { Container } from './styles';

function ModalSignIn(props) {
  console.log(props.selectedUserType)
  return (

    <div>{props.selectedUserType}</div>

  );
}

export default ModalSignIn;