import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  margin: 15px auto 0px auto;
  height: auto;
  width: 80%;
  padding: 0px 16px 24px 16px;
  box-sizing: border-box;
`;

export const Item = styled.div`
  display: flex;
  cursor: pointer;

  &:nth-child(1) {
    margin-left: -16px;
  }

  &:nth-child(2) {
    margin-left: 25px;
  }

  &:nth-child(3) {
    margin-left: 20px;
  }

  p {
    margin-left: 5px;
  }
`;

export const BoxItem = styled.div`
  background-color: var(--color-input-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 24px;
  width: 24px;

  border-radius: 4px;
  z-index: 0;

  &.checked {
    background-color: var(--color-primary);
  }

  &.unchecked {
    background-color: var(--color-input-bg);

    svg {
      display: none;
    }
  }

  &:hover {
    background-color: var(--color-primary);
  }

  svg {
    display: inline-block;
    margin-left: 2px;
    z-index: 1;
    color: var(--color-white);
  }
`;

export const InputBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px auto 0 auto;

  background-color: var(--color-input-bg);
  border-radius: 3px 3px 0 0;
  border-width: 0 0 2px 0;
  border-style: solid;
  border-color: var(--color-input-bg);

  width: 100%;
  height: 50px;

  &.loading {
    border-color: var(--color-separator);
    background-color: var(--color-separator);
    cursor: default;
  }

  &.disabled {
    border-color: var(--color-separator);
    background-color: var(--color-separator);
    cursor: default;
  }

  &:focus-within {
    border-color: var(--color-primary);
  }

  svg {
    margin-left: 10px;
    height: 40px;
    color: var(--color-primary);
  }
`;

export const InputText = styled.input`
  border: none;
  outline: none;

  background-color: var(--color-input-bg);

  color: var(--color-text);
  font-size: 18px;

  width: 85%;
  height: 40px;

  margin-left: 7px;
  margin-top: -3px;

  &.loading {
    background-color: var(--color-separator);
    cursor: default;
  }

  &.disabled {
    border-color: var(--color-separator);
    background-color: var(--color-separator);
    cursor: default;
  }

  &::-webkit-input-placeholder {
    color: var(--color-text-placeholder);
  }
`;

export const InputTextArea = styled.textarea`
  border: none;
  outline: none;

  background-color: var(--color-input-bg);

  color: var(--color-text);
  font-size: 18px;

  width: 85%;
  height: 80%;

  margin-left: 7px;

  padding: 10px;

  &.loading {
    border-color: var(--color-separator);
    background-color: var(--color-separator);
    cursor: default;
  }

  &::-webkit-input-placeholder {
    color: var(--color-text-placeholder);
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;

  color: var(--color-white);
  background-color: var(--color-button-bg);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.19);

  border-radius: 3px;
  border-width: 0;
  border-style: solid;
  outline: none;
  cursor: pointer;

  margin: 10px auto 0 auto;

  width: 100%;
  height: 40px;

  p {
    margin: 0 auto 0 auto;
    text-transform: uppercase;
    font-weight: bold;
  }

  img {
    display: none;
  }

  &:focus {
    background-color: var(--color-button-bg-hover);
  }

  &:hover {
    background-color: var(--color-button-bg-hover);
  }

  &.loading {
    background-color: var(--color-separator);
    cursor: default;

    p {
      display: none;
    }

    img {
      display: block;
      margin: auto;
      height: 40px;
    }
  }
`;

export const ActionButtonSmall = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-white);
  background-color: var(--color-button-bg);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.19);

  border-radius: 3px;
  border-width: 0;
  border-style: solid;
  outline: none;
  cursor: pointer;

  width: 40px;
  height: 40px;

  &.visible {
    display: block;
  }

  &.invisible {
    display: none;
  }

  svg {
    color: var(--color-white);
  }

  &:focus {
    background-color: var(--color-button-bg-hover);
  }

  &:hover {
    background-color: var(--color-button-bg-hover);
  }

  p {
    margin-top: -7px;
    text-align: center;
    text-transform: uppercase;
    font-size: 35px;
    font-weight: bold;
  }
`;

export const ActionButtonSmallRounded = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-white);
  background-color: var(--color-button-bg);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.19);

  border-radius: 50%;
  border-width: 0;
  border-style: solid;
  outline: none;
  cursor: pointer;

  width: 30px;
  height: 30px;

  p {
    margin-top: -7px;
    text-align: center;
    text-transform: uppercase;
    font-size: 35px;
    font-weight: bold;
  }

  &:focus {
    background-color: var(--color-button-bg-hover);
  }

  &:hover {
    background-color: var(--color-button-bg-hover);
  }
`;

export const ActionButtonModalClose = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--color-primary);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.19);

  border-radius: 5px;
  border-width: 0;
  border-style: solid;
  outline: none;
  cursor: pointer;

  width: 30px;
  height: 30px;

  &:focus {
    background-color: var(--color-button-bg-hover);
  }

  &:hover {
    background-color: var(--color-button-bg-hover);
  }

  p {
    margin-top: -2px;
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: bold;
  }
`;
