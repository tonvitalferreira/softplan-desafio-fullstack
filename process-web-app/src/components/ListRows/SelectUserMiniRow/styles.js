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

  margin-left: 5px;
  margin-right: 10px;
`;

export const Item = styled.div`
  background-color: var(--color-input-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 18px;
  width: 18px;

  border-radius: 4px;

  cursor: pointer;

  &:nth-child(1) {
    margin-left: -16px;
  }

  &:nth-child(2) {
    margin-left: 70px;
  }

  &:nth-child(3) {
    margin-left: 60px;
  }

  &.checked {
    background-color: var(--color-primary);

    svg {
      visibility: visible;
    }
  }

  &.unchecked {
    background-color: var(--color-input-bg);

    svg {
      visibility: hidden;
    }
  }

  &:hover {
    background-color: var(--color-primary);
  }

  svg {
    visibility: hidden;

    margin-left: 2px;
    z-index: 1;
    color: var(--color-white);
    height: 15px;
    width: 15px;
  }
`;
