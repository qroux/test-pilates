import { ActionTypes } from '../actions/actionTypes';

export interface State {
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
  initialState: State;
}

export interface ReducerParams {
  state: State;
  action: {
    type: ActionTypes;
    payload: any;
  };
}

export interface FullContext {
  state: State;
  logIn: () => void;
}
