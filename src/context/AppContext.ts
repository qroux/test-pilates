import { ActionTypes } from './actions/actionTypes';
import createDataContext from './createDataContext';
import { Actions, ReducerAction, ReducerParams, AppState } from './interfaces';
import { logIn } from './actions/appActions';

const AppReducer = (state: AppState, action: ReducerAction): AppState => {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return { ...state, loggedIn: !state.loggedIn };
    default:
      return { ...state };
  }
};

export const { Context, Provider } = createDataContext({
  reducer: AppReducer,
  actions: { logIn },
  initialState: { loggedIn: false },
});
