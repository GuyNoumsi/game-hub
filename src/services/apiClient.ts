import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ccbb3e1b670640979442295c12cc89e3",
  },
});
