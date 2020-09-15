import axios from "axios";
import APIConfigs from "./APIConfigs";
import { TOKEN_KEY } from "./APIAuth";

async function getAllProcesses() {
  let localAuthToken = localStorage.getItem(TOKEN_KEY);
  let processes = [];
  if (localAuthToken) {
    let response = null;
    try {
      response = await axios.get(APIConfigs.apiURL + "/process/list", {
        headers: {
          Authorization: "Bearer " + localAuthToken,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error.response);
      return processes;
    }

    if (response && response.status == 200) {
      if (response.data) {
        let { data } = response;
        if (data.success) {
          processes = data.processes;
        }
      }
    }
  }

  return processes;
}

async function saveProcess(title, description) {
  let localAuthToken = localStorage.getItem(TOKEN_KEY);
  let createdProcess = null;
  if (localAuthToken) {
    let response = null;
    try {
      response = await axios.post(
        APIConfigs.apiURL + "/process/save",
        {
          title,
          description,
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
      return createdProcess;
    }

    if (response && response.status == 200) {
      if (response.data) {
        let { data } = response;
        if (data.success) {
          createdProcess = data.process;
        }
      }
    }
  }

  return createdProcess;
}

export { getAllProcesses, saveProcess };
