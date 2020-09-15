import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
`;

export const LeftPanel = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const CenterPanel = styled.div`
  width: 80%;

  display: block;
`;

export const RightPanel = styled.div`
  background-color: #ddd;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImgSignIn = styled.img`
  height: 100%;
  width: 100%;
`;

export const AppLogo = styled.div`
  height: 147px;
  width: 220px;

  display: flex;
  justify-content: center;

  margin: 10px auto 10px auto;
`;

export const CardTitle = styled.h2`
  text-align: center;
  color: var(--color-primary);
`;

export const CardSignIn = styled.div`
  display: block;
  justify-content: center;

  height: 300px;
  width: 80%;

  margin: auto;
  padding-top: 15px;
`;

export const FooterSignIn = styled.div`
  display: block;

  width: 100%;

  p {
    text-align: center;
    margin: auto;
  }

  img {
    display: block;
    margin: auto;
  }
`;
