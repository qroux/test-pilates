import { ActionTypes } from './actionTypes';

export const logIn = (dispatch: Function) => async () => {
  dispatch({ type: ActionTypes.LOG_IN });
};
