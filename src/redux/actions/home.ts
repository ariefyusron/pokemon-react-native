import { Dispatch } from "../types";
import { API } from "../../configs";

export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_DATA";

// get seasons
export const GET_SEASON_PENDING = "GET_SEASON_PENDING";
export const GET_SEASON_SUCCESS = "GET_SEASON_SUCCESS";
export const GET_SEASON_ERROR = "GET_SEASON_ERROR";

export const addData = (data: string) => (dispatch: Dispatch) => {
  dispatch({ type: ADD_DATA, payload: { data } });
};

export const deleteData = (data: number) => (dispatch: Dispatch) => {
  dispatch({ type: DELETE_DATA, payload: { data } });
};

export const getSeasons = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_SEASON_PENDING });
    const res = await API.getSeasons();
    dispatch({
      type: GET_SEASON_SUCCESS,
      payload: { data: res.data.api.seasons },
    });
  } catch (err) {
    if (err.response) {
      dispatch({ type: GET_SEASON_ERROR, payload: { data: err.response } });
    } else {
      dispatch({ type: GET_SEASON_ERROR });
    }
  }
};
