import { Dispatch } from "../types";
import { API } from "../../configs";

// get pokemons
export const GET_ALL_POKEMON_PENDING = "GET_ALL_POKEMON_PENDING";
export const GET_ALL_POKEMON_SUCCESS = "GET_ALL_POKEMON_SUCCESS";
export const GET_ALL_POKEMON_ERROR = "GET_ALL_POKEMON_ERROR";

export const GET_DETAIL_POKEMON_PENDING = "GET_DETAIL_POKEMON_PENDING";
export const GET_DETAIL_POKEMON_SUCCESS = "GET_DETAIL_POKEMON_SUCCESS";
export const GET_DETAIL_POKEMON_ERROR = "GET_DETAIL_POKEMON_ERROR";

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

export const getPokemon = () => async (dispatch: Dispatch) => {
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
