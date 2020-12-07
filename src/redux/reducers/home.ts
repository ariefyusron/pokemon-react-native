import {
  ADD_DATA,
  DELETE_DATA,
  GET_SEASON_ERROR,
  GET_SEASON_PENDING,
  GET_SEASON_SUCCESS,
} from "../actions";
import { Action, HomeState } from "../types";

const initialState: HomeState = {
  data: [],
  isLoadingGetSeason: false,
  listSeasons: [],
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ADD_DATA:
      return { ...state, data: [payload.data, ...state.data] };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter((data, index) => index !== payload.data),
      };

    // get season
    case GET_SEASON_PENDING:
      return { ...state, isLoadingGetSeason: true };
    case GET_SEASON_SUCCESS:
      return { ...state, isLoadingGetSeason: false, listSeasons: payload.data };
    case GET_SEASON_ERROR:
      return { ...state, isLoadingGetSeason: false };

    default:
      return state;
  }
};
