// Action
interface Payload {
  data?: any;
  index?: number;
}

interface Params {
  type: string;
  payload?: Payload;
}

export type Dispatch = (params: Params | Function) => void;
export type GetState = () => Reducers;

export interface Action {
  type: string;
  payload: Payload;
}

// Reducer
export interface Reducers {
  home: HomeState;
}

export interface HomeState {
  isLoading: boolean;
  list: any[];
}
