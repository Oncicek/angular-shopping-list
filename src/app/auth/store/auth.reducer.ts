import { Action, createReducer, on } from '@ngrx/store';
import { startAuth } from './auth.actions';

export interface State {
  isLoginMode: boolean;
}

const initialState: State = {
  isLoginMode: false,
};

const _authReducer = createReducer(
  initialState,

  on(startAuth, (state) => ({
    ...state,
    isLoginMode: !state.isLoginMode,
  }))
);

export function authReducer(state: State, action: Action) {
  return _authReducer(state, action);
}
