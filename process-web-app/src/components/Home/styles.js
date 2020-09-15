import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const cardCSS = css`
  background: var(--color-white);
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
  &.no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);
  }
  padding: 10px;
`;

export const Card = styled.div`
  ${cardCSS}

  width: 50%;
  height: 50%;
  margin: auto;

  @media(max-width: 375px) {
    width: 90%;
    height: 28%;
  }

  @media(min-width: 425px) {
    width: 90%;
    height: 210px;
  }
`;

export const CardTitle = styled.h2`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const CardBody = styled.div`
  height: 100%;

  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  span{
    font-size: 18px;
    font-weight: 500;
    display: block;
    text-align: center;
  }
`;

export const CardActions = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  margin-right: 5px;
  padding: 10px;
  outline: none;
  border: 0px solid #000000;
  border-radius: 2px;

  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: var(--color-primary);
  color: var(--color-white);
  cursor: pointer;

  &:hover{
    background-color: var(--color-primary-light);
  }

  span{
    margin-left: 5px;
    font-weight: 0;
  }
  
  @media(max-width: 425px) {
    display: block;
    span{
      margin: 0;
      font-size: 14px;
    }
  }
`;
