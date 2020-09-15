import styled from "styled-components";

export const Container = styled.div`
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 3; /* Specify a stack order in case you're using a different order for other elements */

  &.visible {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.invisible {
    display: none;
  }
`;

export const ModalCard = styled.div`
  height: 250px;
  width: 400px;

  padding: 10px;

  background: var(--color-white);
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);

  &.no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);
  }
`;

export const ListUsersHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ListUsersAddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-white);
  background-color: var(--color-green);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.19);

  border-radius: 5px;
  border-width: 0;
  border-style: solid;
  outline: none;
  cursor: pointer;

  width: 30px;
  height: 30px;

  margin-top: 10px;
  margin-right: 34px;

  &:focus {
    background-color: var(--color-green-dark);
  }

  &:hover {
    background-color: var(--color-green-dark);
  }

  p {
    margin-top: -2px;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const ListUsers = styled.div`
  min-height: 80px;
  max-height: 100px;
  width: 80%;

  margin: 10px auto 10px auto;

  overflow: auto;
`;
