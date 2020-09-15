import axios from "axios";
import APIConfigs from "./APIConfigs";

const TOKEN_KEY = "authtk";
const axiosConfig = {
  headers: {},
};

async function generateToken(userName, passwordHash) {
  let response = null;
  try {
    response = await axios.post(
      APIConfigs.apiURL + "/oauth/authenticate",
      {
        userName,
        passwordHash,
      },
      axiosConfig
    );
  } catch (error) {
    console.log(error.response);
    return null;
  }

  let token = null;

  if (response && response.status == 200) {
    if (response.data) {
      let { data } = response;
      if (!data.error) {
        token = data.token;
      }
    }
  }

  return token;
}

const setAuthToken = (authToken) => {
  localStorage.setItem(TOKEN_KEY, authToken);
};

async function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

async function isLogged() {
  let isValid = false;
  let localAuthToken = localStorage.getItem(TOKEN_KEY);
  console.log(localAuthToken);
  if (localAuthToken) {
    let response = null;

    try {
      response = await axios.post(
        APIConfigs.apiURL + "/oauth/token-validate",
        {
          authToken: localAuthToken,
        },
        axiosConfig
      );
    } catch (error) {
      return false;
    }

    if (response && response.data) {
      let { data } = response;
      if (!data.error) {
        isValid = data.valid;
      }
    }
  }

  return isValid;
}

export { generateToken, setAuthToken, logout, isLogged, TOKEN_KEY };
