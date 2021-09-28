import { ActionTypes } from '../actions/actionTypes';

export interface AppState {
  loggedIn: boolean;
}

export interface Actions {
  [key: string]: (dispatch: Function) => () => Promise<void>;
}

export interface ReducerAction {
  type: ActionTypes;
  payload: any;
}

export interface ContextParams {
  reducer: any;
  actions: Actions;
  initialState: AppState;
}

export interface ReducerParams {
  state: AppState;
  action: {
    type: ActionTypes;
    payload: any;
  };
}

export interface FullContext {
  state: AppState;
  logIn?: () => void;
}
