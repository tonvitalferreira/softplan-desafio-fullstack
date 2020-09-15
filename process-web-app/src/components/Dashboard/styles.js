import styled, { css, keyframes } from "styled-components";
import { RiGhostFill } from "react-icons/ri";

const cardCSS = css`
  background: var(--color-white);
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);

  &.no-shadow {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 2px 3px rgba(0, 0, 0, 0.05);
  }
`;

export const Container = styled.div`
  display: flex;

  height: 100%;
  width: 100%;
`;

export const MainPanel = styled.div`
  display: flex;
  box-sizing: content-box;
  margin: 10px;

  height: 90%;
  width: 100%;
`;

export const FixedLeftMenuBar = styled.div`
  background-color: var(--color-primary);

  display: block;

  height: 100%;
  width: 100px;
`;

export const FixedProfileCard = styled.div`
  display: block;

  height: 200px;
  width: 20%;

  margin: 20px 5px auto 10px;
  ${cardCSS}
`;

export const ProfileImage = styled.img`
  height: 100px;

  display: flex;
  justify-content: center;

  margin: -40px auto 10px auto;

  border-style: solid;
  border-color: var(--color-white);
  border-width: 2px;
  border-radius: 50%;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 3px rgba(0, 0, 0, 0.2);
`;

export const ProfileFullName = styled.h3`
  text-align: center;
  color: var(--color-primary);
`;

export const ProfileDetail = styled.h4`
  text-align: center;
  color: var(--color-primary);
`;

export const ProfileCardHeader = styled.div`
  background-color: var(--color-primary);
  width: 100%;
  height: 60px;
  border-top: 1px solid var(--color-separator);
`;

export const Separator = styled.div`
  width: 95%;
  height: 1px;
  margin: auto;
  border-top: 1px solid var(--color-separator);
`;

export const FixedMiddleCard = styled.div`
  display: block;
  background-color: #fff;

  height: 100%;
  width: 40%;

  margin: 20px 5px 20px 5px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 5px;
  padding-left: 10px;
  margin-bottom: 8px;

  h2 {
    color: var(--color-primary);
    margin-left: 10px;
  }

  svg {
    color: var(--color-primary);
    height: 35px;
    width: 35px;
  }
`;

export const CardHeaderTitle = styled.div`
  display: flex;
`;

export const CardHeaderActions = styled.div`
  display: flex;
  margin-right: 10px;
`;

export const CardBody = styled.div`
  margin-left: -10px;
  margin-top: 10px;
  min-height: 200px;
  max-height: 250px;
  width: 100%;

  overflow: auto;
`;

export const UsersCard = styled.div`
  display: block;
  background-color: #ddd;

  height: 50%;
  width: 90%;

  margin: 0 auto 20px auto;

  &.visible {
    display: block;
  }

  &.invisible {
    display: none;
  }

  ${cardCSS}
`;

export const ProcessesCard = styled.div`
  display: block;
  background-color: #ddd;

  height: 50%;
  width: 90%;

  margin: 0 auto 20px auto;

  &.visible {
    display: block;
  }

  &.invisible {
    display: none;
  }

  ${cardCSS}
`;

export const FixedViewProcessCard = styled.div`
  width: 40%;

  margin: 20px 10px 0 5px;

  &.visible {
    display: block;
  }

  &.invisible {
    display: none;
  }

  ${cardCSS}
`;

export const CardViewProcessBody = styled.div`
  min-height: 80px;
  max-height: 250px;
  width: 95%;

  margin: 10px auto 10px auto;

  overflow: auto;
`;

export const ProcesssTitle = styled.h1`
  padding: 10px;
  color: var(--color-primary);
  text-align: center;
`;

export const ProcesssDescription = styled.h3`
  padding: 10px;
  color: var(--color-primary);
  text-align: justify;
  text-justify: inter-word;
`;

export const LeftButton = styled.button`
  display: block;

  height: 50px;
  width: 100%;
  background: transparent;
  border-width: 0 0 0 2px;
  border-color: var(--color-primary);
  border-style: solid;
  outline: none;
  cursor: pointer;

  margin-top: 10px;

  &:hover {
    border-color: var(--color-accent);
  }

  &:hover svg {
    color: var(--color-accent);
  }

  svg {
    height: 30px;
    width: 30px;
  }
`;

export const EmptyList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EmptyContainer = styled.div`
  display: block;

  h4 {
    color: var(--color-primary);
    text-align: center;
  }
`;

const moveUpDown = keyframes`
   0% { transform: translateY(0); }
   100% { transform: translateY(-10px); }
`;

export const GhostIcon = styled(RiGhostFill)`
  display: block;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  height: 80px;
  width: 80px;
  animation: ${moveUpDown} 0.7s infinite alternate;
  color: var(--color-primary);
`;
