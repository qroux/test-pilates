import axios from "axios";

const root =
  process.env.NODE_ENV === "production"
    ? "https://test-pilates.herokuapp.com"
    : "http://localhost:3000";

const instance = axios.create({
  baseURL: root,
});

export default instance;
