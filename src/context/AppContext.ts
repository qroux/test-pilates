import { ActionTypes } from './actions/actionTypes';
import createDataContext from './createDataContext';
import { ReducerAction, AppState } from './interfaces';
import { logIn } from './actions/appActions';

const AppReducer = (state: AppState, action: ReducerAction): AppState => {
  console.log({ state });
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
