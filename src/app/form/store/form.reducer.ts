import { Action, createReducer, on } from '@ngrx/store';
import { doSomething, doSomethingWithoutArguments } from './form.actions';

export interface State {
  kocka: any;
  ahoj: boolean;
}

const initialState: State = {
  kocka: null,
  ahoj: false,
};

const _formReducer = createReducer(
  initialState,

  on(doSomething, (state, action) => ({
    ...state,
    kocka: (state.kocka = action._p.kocka),
  })),

  on(doSomethingWithoutArguments, (state) => ({
    ...state,
    ahoj: (state.ahoj = !state.ahoj),
  }))
);

export function formReducer(state: State, action: Action) {
  return _formReducer(state, action);
}
