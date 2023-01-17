import { createAction, props } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

export enum ShoppingListActionsEnum {
  ADD_INGREDIENT = '[Shopping List] Add Ingredient',
  ADD_INGREDIENTS = '[Shopping List] Add Ingredients',
  UPDATE_INGREDIENT = '[Shopping List] Update Ingredient',
  DELETE_INGREDIENT = '[Shopping List] Delete Ingredient',
  START_EDIT = '[Shopping List] Start Edit',
  STOP_EDIT = '[Shopping List] Stop Edit',
}

export const addIngredient = createAction(
  ShoppingListActionsEnum.ADD_INGREDIENT,
  props<{
    ingredient: Ingredient;
  }>
);

export const addIngredients = createAction(
  ShoppingListActionsEnum.ADD_INGREDIENTS,
  props<{
    ingredients: Ingredient[];
  }>()
);

export const updateIngredient = createAction(
  ShoppingListActionsEnum.UPDATE_INGREDIENT,
  props<{
    ingredient: Ingredient;
  }>()
);

export const deleteIngredient = createAction(
  ShoppingListActionsEnum.DELETE_INGREDIENT
);

export const startEdit = createAction(
  ShoppingListActionsEnum.START_EDIT,
  props<{
    index: number;
  }>()
);

export const stopEdit = createAction(ShoppingListActionsEnum.STOP_EDIT);
