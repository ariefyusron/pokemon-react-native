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
  getAllPokemon: () => host.get("pokemon"),
  getDetailPokemon: (id: string) => host.get(`pokemon/${id}`),
  getAllType: () => host.get("type"),
};

export default api;
