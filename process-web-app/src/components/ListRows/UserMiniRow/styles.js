import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  margin: auto;
  margin-bottom: 5px;

  width: 90%;

  img {
    height: 25px;
    width: 25px;
    border-style: solid;
    border-color: var(--color-white);
    border-width: 2px;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  }
`;

export const RowDetails = styled.div`
  display: block;
  color: var(--color-primary);
  margin-left: 10px;
`;

export const RowActions = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    margin-right: 5px;
  }
`;
