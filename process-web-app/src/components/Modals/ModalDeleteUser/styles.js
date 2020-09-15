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
  height: 170px;
  width: 350px;

  padding: 10px;

  background: var(--color-white);
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);

  &.no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);
  }
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: space-between;
`;
