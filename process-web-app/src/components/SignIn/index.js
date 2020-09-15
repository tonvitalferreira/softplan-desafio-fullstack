import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import {
  Container,
  AppLogo,
  LeftPanel,
  RightPanel,
  ImgSignIn,
  CardSignIn,
  CardTitle,
  CenterPanel,
  FooterSignIn,
} from "./styles";
import { InputBox, InputText, ActionButton } from "../FormComponents";
import { IconUser, IconPassword } from "../Icons";
import softPlanImage from "../../assets/img/softplan-logo-2.png";
import signInImage from "../../assets/img/bg-sign-in.jpg";
import appLogoImage from "../../assets/img/process-logo-with-name.png";
import loadingButonImage from "../../assets/img/loading.svg";

import { generateToken, setAuthToken } from "../../api/APIAuth";

function SignIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [hasCredentialsError, setHasCredentialsError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isCanReload, setCanReload] = useState(false);

  let handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  let handleLogin = async () => {
    if (!isLoading) {
      setHasCredentialsError(false);
      setLoading(true);
      //simulate lag in communication with 2 seconds
      setTimeout(async () => {
        let token = await generateToken(userName, password, "user");

        if (token) {
          setAuthToken(token);
          setCanReload(true);
          return;
        } else {
          setHasCredentialsError(true);
        }

        setLoading(false);
      }, 2000);
    }
  };

  let renderRedirect = () => {
    return <Redirect to={"/dashboard"} />;
  };

  return (
    <Container>
      {isCanReload ? renderRedirect() : null}
      <LeftPanel>
        <CenterPanel>
          <AppLogo>
            <img src={appLogoImage} />
          </AppLogo>

          <CardSignIn>
            <CardTitle>Sign In</CardTitle>
            <InputBox className={isLoading ? "loading" : ""}>
              <IconUser />
              <InputText
                disabled={isLoading}
                className={isLoading ? "loading" : ""}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                placeholder="your user name"
              />
            </InputBox>
            <InputBox className={isLoading ? "loading" : ""}>
              <IconPassword />
              <InputText
                disabled={isLoading}
                className={isLoading ? "loading" : ""}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e)}
                type="password"
                placeholder="your password"
              />
            </InputBox>
            <ActionButton
              className={isLoading ? "loading" : ""}
              onClick={() => {
                if (!isLoading) {
                  handleLogin();
                }
              }}
            >
              <img src={loadingButonImage} />
              <p>Sign In</p>
            </ActionButton>
            {hasCredentialsError ? (
              <h4
                style={{ textAlign: "center", marginTop: 5, color: "#d92558" }}
              >
                Credentials not found!
              </h4>
            ) : null}
          </CardSignIn>

          <FooterSignIn>
            <p>
              Designed by{" "}
              <a href="https://www.linkedin.com/in/ton-vital-ferreira/">
                <b>Ton</b>
              </a>
              <span> with ❤️ to</span>
            </p>
            <img src={softPlanImage} height={40} />
          </FooterSignIn>
        </CenterPanel>
      </LeftPanel>

      <RightPanel>
        <ImgSignIn src={signInImage} />
      </RightPanel>
    </Container>
  );
}

export default SignIn;
