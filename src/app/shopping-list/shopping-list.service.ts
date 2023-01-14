import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] | undefined = [
    new Ingredient('Apples', 27),
    new Ingredient('Tomatoues', 15),
  ];

  getIngredients() {
    return [...(this.ingredients || [])];
  }

  getIngredient(index: number) {
    return this.ingredients?.[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients?.push(ingredient);
    this.ingredientsChanged.next([...(this.ingredients || [])]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients?.push(...ingredients);
    this.ingredientsChanged.next([...(this.ingredients || [])]);
  }

  updateIngredient(index: number, newIgredient: Ingredient) {
    if (this.ingredients?.[index]) {
      this.ingredients[index] = newIgredient;
      this.ingredientsChanged.next([...this.ingredients]);
    }
  }

  deleteIngredient(index: number) {
    this.ingredients?.splice(index, 1);
    this.ingredientsChanged.next([...(this.ingredients || [])]);
  }
}
