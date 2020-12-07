import {
  GET_ALL_POKEMON_ERROR,
  GET_ALL_POKEMON_PENDING,
  GET_ALL_POKEMON_SUCCESS,
  GET_ALL_TYPE_ERROR,
  GET_ALL_TYPE_PENDING,
  GET_ALL_TYPE_SUCCESS,
  GET_DETAIL_POKEMON_ERROR,
  GET_DETAIL_POKEMON_PENDING,
  GET_DETAIL_POKEMON_SUCCESS,
} from "../actions";
import { Action, HomeState } from "../types";

const initialState: HomeState = {
  isLoadingPokemon: false,
  listPokemon: [],
  isLoadingType: false,
  listType: [],
};

let result: any;

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    // get pokemons
    case GET_ALL_POKEMON_PENDING:
      return { ...state, isLoadingPokemon: true };
    case GET_ALL_POKEMON_SUCCESS:
      return { ...state, isLoadingPokemon: false, listPokemon: payload.data };
    case GET_ALL_POKEMON_ERROR:
      return { ...state, isLoadingPokemon: false };

    // get detail pokemons
    case GET_DETAIL_POKEMON_PENDING:
      result = [...state.listPokemon];
      result[payload.index!] = { ...result[payload.index!], isLoading: true };
      return { ...state, listPokemon: result };
    case GET_DETAIL_POKEMON_SUCCESS:
      result = [...state.listPokemon];
      result[payload.index!] = {
        ...result[payload.index!],
        ...payload.data,
        isLoading: false,
      };
      return { ...state, listPokemon: result };
    case GET_DETAIL_POKEMON_ERROR:
      result = [...state.listPokemon];
      result[payload.index!] = { ...result[payload.index!], isLoading: false };
      return { ...state, listPokemon: result };

    // get all type
    case GET_ALL_TYPE_PENDING:
      return { ...state, isLoadingType: true };
    case GET_ALL_TYPE_SUCCESS:
      return {
        ...state,
        isLoadingType: false,
        listType: [{ name: "all" }, ...payload.data],
      };
    case GET_ALL_TYPE_ERROR:
      return { ...state, isLoadingType: false };

    default:
      return state;
  }
};
