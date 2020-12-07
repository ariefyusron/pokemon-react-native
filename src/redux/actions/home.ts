import { Dispatch } from "../types";
import { API } from "../../configs";

// get pokemons
export const GET_ALL_POKEMON_PENDING = "GET_ALL_POKEMON_PENDING";
export const GET_ALL_POKEMON_SUCCESS = "GET_ALL_POKEMON_SUCCESS";
export const GET_ALL_POKEMON_ERROR = "GET_ALL_POKEMON_ERROR";

export const GET_DETAIL_POKEMON_PENDING = "GET_DETAIL_POKEMON_PENDING";
export const GET_DETAIL_POKEMON_SUCCESS = "GET_DETAIL_POKEMON_SUCCESS";
export const GET_DETAIL_POKEMON_ERROR = "GET_DETAIL_POKEMON_ERROR";

// get type
export const GET_ALL_TYPE_PENDING = "GET_ALL_TYPE_PENDING";
export const GET_ALL_TYPE_SUCCESS = "GET_ALL_TYPE_SUCCESS";
export const GET_ALL_TYPE_ERROR = "GET_ALL_TYPE_ERROR";

export const getDetailPokemon = (id: string, index: number) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: GET_DETAIL_POKEMON_PENDING, payload: { index } });
    const res = await API.getDetailPokemon(id);
    dispatch({
      type: GET_DETAIL_POKEMON_SUCCESS,
      payload: { data: res.data, index },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_DETAIL_POKEMON_ERROR,
        payload: { data: err.response, index },
      });
    } else {
      dispatch({ type: GET_DETAIL_POKEMON_ERROR, payload: { index } });
    }
  }
};

export const getAllPokemon = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_POKEMON_PENDING });
    const res = await API.getAllPokemon();
    dispatch({
      type: GET_ALL_POKEMON_SUCCESS,
      payload: { data: res.data.results },
    });

    res.data.results.forEach((item: any, index: number) => {
      const id = item.url.split("/")[item.url.split("/").length - 2];
      dispatch(getDetailPokemon(id, index));
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_ALL_POKEMON_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: GET_ALL_POKEMON_ERROR });
    }
  }
};

export const getAllType = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: GET_ALL_TYPE_PENDING });
    const res = await API.getAllType();
    dispatch({
      type: GET_ALL_TYPE_SUCCESS,
      payload: { data: res.data.results },
    });
  } catch (err) {
    if (err.response) {
      dispatch({
        type: GET_ALL_TYPE_ERROR,
        payload: { data: err.response },
      });
    } else {
      dispatch({ type: GET_ALL_TYPE_ERROR });
    }
  }
};
