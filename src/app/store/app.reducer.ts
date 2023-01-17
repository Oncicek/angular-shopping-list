import { State as ShoppingState } from '../shopping-list/store/shopping-list.reducer';
import { State as AuthState } from '../auth/store/auth.reducer';

export interface AppState {
  shoppingList: ShoppingState;
  auth: AuthState;
}
