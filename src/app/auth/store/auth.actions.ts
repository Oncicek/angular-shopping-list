import { createAction } from '@ngrx/store';

enum AuthActionsEnum {
  START_AUTH = '[Auth] Start Auth',
}

export const startAuth = createAction(AuthActionsEnum.START_AUTH);
