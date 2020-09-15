const APIConfigs = {
  apiURL: getAPIURL(),
};

function getAPIURL() {
  let ret = "http://localhost:8080";
  if (process.env.NODE_ENV !== "production") {
    ret = "http://localhost:8080";
  }
  return ret;
}

export default APIConfigs;
