import { createAction, props } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

export enum FormActionsEnum {
  ADD_SOMETHING = '[Form] Add Something',
  DO_SOMETHING_WITHOUT_ARGUMENTS = '[Form] Do something without arguments',
}

export const doSomething = createAction(
  FormActionsEnum.ADD_SOMETHING,
  props<{
    kocka: any;
  }>
);

export const doSomethingWithoutArguments = createAction(
  FormActionsEnum.DO_SOMETHING_WITHOUT_ARGUMENTS
);
