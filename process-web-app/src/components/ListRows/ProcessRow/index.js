import React, { useState, useEffect } from "react";

import { Row, RowDetails, RowActions } from "./styles";
import { ActionButtonSmallRounded } from "../../FormComponents";
import { IconProcesses, IconSee } from "../../Icons";

function UserRow(props) {
  const [process, setProcess] = useState(props.process);

  useEffect(() => {
    setProcess(props.process);
  }, [props.process]);

  return (
    <Row>
      <IconProcesses />
      <RowDetails>
        <h3>{process ? process.title : "..."}</h3>
        <h4>{process ? process.description : "..."}</h4>
      </RowDetails>
      <RowActions>
        <ActionButtonSmallRounded
          onClick={() => {
            props.handleViewProcess(process);
          }}
        >
          <IconSee style={{ color: "#fff", height: 20, width: 20 }} />
        </ActionButtonSmallRounded>
      </RowActions>
    </Row>
  );
}

export default UserRow;
