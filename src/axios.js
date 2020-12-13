import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-105cd.cloudfunctions.net/api",

  // "http://localhost:5001/clone-105cd/us-central1/api",
  //the api (cloud function) url
});

export default instance;
