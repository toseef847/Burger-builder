import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-builder-544df.firebaseio.com/",
});

export default instance;
