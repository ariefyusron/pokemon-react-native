import {
  GET_ALL_POKEMON_ERROR,
  GET_ALL_POKEMON_PENDING,
  GET_ALL_POKEMON_SUCCESS,
  GET_DETAIL_POKEMON_ERROR,
  GET_DETAIL_POKEMON_PENDING,
  GET_DETAIL_POKEMON_SUCCESS,
} from "../actions";
import { Action, HomeState } from "../types";

const initialState: HomeState = {
  isLoading: false,
  list: [],
};

let result: any;

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get pokemons
    case GET_ALL_POKEMON_PENDING:
      return { ...state, isLoading: true };
    case GET_ALL_POKEMON_SUCCESS:
      return { ...state, isLoading: false, list: payload.data };
    case GET_ALL_POKEMON_ERROR:
      return { ...state, isLoading: false };

    // get detail pokemons
    case GET_DETAIL_POKEMON_PENDING:
      result = [...state.list];
      result[payload.index!] = { ...result[payload.index!], isLoading: true };
      return { ...state, list: result };
    case GET_DETAIL_POKEMON_SUCCESS:
      result = [...state.list];
      result[payload.index!] = {
        ...result[payload.index!],
        ...payload.data,
        isLoading: false,
      };
      return { ...state, list: result };
    case GET_DETAIL_POKEMON_ERROR:
      result = [...state.list];
      result[payload.index!] = { ...result[payload.index!], isLoading: false };
      return { ...state, list: result };

    default:
      return state;
  }
};
