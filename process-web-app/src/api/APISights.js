import axios from "axios";
import APIConfigs from "./APIConfigs";
import { TOKEN_KEY } from "./APIAuth";

async function addSightProcessToUsers(processId, userList) {
  let localAuthToken = localStorage.getItem(TOKEN_KEY);
  let createdSight = false;
  if (localAuthToken) {
    let response = null;
    try {
      response = await axios.post(
        APIConfigs.apiURL + "/sights/add-to-users/" + processId,
        {
          userList,
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
      return createdSight;
    }

    if (response && response.status == 200) {
      if (response.data) {
        let { data } = response;
        if (data.success) {
          createdSight = data.success;
        }
      }
    }
  }

  return createdSight;
}

async function getSightsByProcessId(process_id) {
  let localAuthToken = localStorage.getItem(TOKEN_KEY);
  let sights = [];
  if (localAuthToken) {
    let response = null;
    try {
      response = await axios.get(
        APIConfigs.apiURL + "/sights/get/by-id-process/" + process_id,
        {
          headers: {
            Authorization: "Bearer " + localAuthToken,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error.response);
      return sights;
    }

    if (response && response.status == 200) {
      if (response.data) {
        let { data } = response;
        if (data.success) {
          sights = data.sights;
        }
      }
    }
  }
  return sights;
}

async function sightAProcess(processId, text) {
  let localAuthToken = localStorage.getItem(TOKEN_KEY);
  let sighted = false;
  if (localAuthToken) {
    let response = null;
    try {
      response = await axios.put(
        APIConfigs.apiURL + "/sights/sight-a-process/" + processId,
        text,
        {
          headers: {
            Authorization: "Bearer " + localAuthToken,
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error.response);
      return sighted;
    }

    if (response && response.status == 200) {
      if (response.data) {
        let { data } = response;
        if (data.success) {
          sighted = data.success;
        }
      }
    }
  }

  return sighted;
}

export { addSightProcessToUsers, getSightsByProcessId, sightAProcess };
