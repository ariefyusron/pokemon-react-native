import axios from "axios";

import { ENV } from ".";

const host = axios.create({
  baseURL: ENV.host,
});

// type body
/* in here
..
..
*/

const api = {
  getSeasons: () => host.get("seasons"),
};

export default api;
