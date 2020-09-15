import axios from "axios";
import APIConfigs from "./APIConfigs";
import { TOKEN_KEY } from "./APIAuth";

async function getUserByLocalAuthToken() {
  let localAuthToken = localStorage.getItem(TOKEN_KEY);
  let user = null;
  if (localAuthToken) {
    let response = null;
    try {
      response = await axios.get(APIConfigs.apiURL + "/users/get-by-username", {
        headers: {
          Authorization: "Bearer " + localAuthToken,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error.response);
      return null;
    }

    if (response && response.status == 200) {
      if (response.data) {
        let { data } = response;
        if (data.success) {
          user = data.user;
        }
      }
    }
  }

  return user;
}

async function getAllUsers() {
  let localAuthToken = localStorage.getItem(TOKEN_KEY);
  let users = [];
  if (localAuthToken) {
    let response = null;
    try {
      response = await axios.get(APIConfigs.apiURL + "/users/list", {
        headers: {
          Authorization: "Bearer " + localAuthToken,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error.response);
      return users;
    }

    if (response && response.status == 200) {
      if (response.data) {
        let { data } = response;
        if (data.success) {
          users = data.users;
        }
      }
    }
  }

  return users;
}

async function createUser(fullName, userName, passwordHash, permission) {
  let localAuthToken = localStorage.getItem(TOKEN_KEY);
  let createdUser = null;
  if (localAuthToken) {
    let response = null;
    try {
      response = await axios.post(
        APIConfigs.apiURL + "/users/save",
        {
          fullName,
          userName,
          passwordHash,
          permission,
        },
        {
          headers: {
            Authorization: "Bearer " + localAuthToken,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error.response);
      return createdUser;
    }

    if (response && response.status == 200) {
      if (response.data) {
        let { data } = response;
        if (data.success) {
          createdUser = data.user;
        }
      }
    }
  }

  return createdUser;
}

async function updateUser(id, fullName, userName, passwordHash, permission) {
  let localAuthToken = localStorage.getItem(TOKEN_KEY);
  let updatedUser = null;
  if (localAuthToken) {
    let response = null;
    try {
      response = await axios.put(
        APIConfigs.apiURL + "/users/update",
        {
          id,
          fullName,
          userName,
          passwordHash,
          permission,
        },
        {
          headers: {
            Authorization: "Bearer " + localAuthToken,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error.response);
      return updatedUser;
    }

    if (response && response.status == 200) {
      if (response.data) {
        let { data } = response;
        if (data.success) {
          updatedUser = data.user;
        }
      }
    }
  }

  return updatedUser;
}

async function deleteUser(id) {
  let localAuthToken = localStorage.getItem(TOKEN_KEY);
  let deletedUser = false;
  if (localAuthToken) {
    let response = null;
    try {
      response = await axios.delete(APIConfigs.apiURL + "/users/delete/" + id, {
        headers: {
          Authorization: "Bearer " + localAuthToken,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error.response);
      return deletedUser;
    }

    if (response && response.status == 200) {
      if (response.data) {
        let { data } = response;
        if (data.success) {
          deletedUser = data.deleted;
        }
      }
    }
  }

  return deletedUser;
}

export {
  getUserByLocalAuthToken,
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
