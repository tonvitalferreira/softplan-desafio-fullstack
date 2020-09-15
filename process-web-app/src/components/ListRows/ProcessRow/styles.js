import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: auto;

  width: 90%;

  svg {
    color: var(--color-primary);
    height: 35px;
    width: 35px;
  }
`;

export const RowDetails = styled.div`
  display: block;
  color: var(--color-primary);
  text-align: center;
`;

export const RowActions = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    margin-right: 5px;
  }
`;
