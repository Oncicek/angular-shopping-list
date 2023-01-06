import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] | undefined = [
    new Ingredient('Apples', 27),
    new Ingredient('Tomatoues', 15),
  ];

  getIngredients() {
    return [...(this.ingredients || [])];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients?.push(ingredient);
    this.ingredientsChanged.emit([...(this.ingredients || [])]);
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients?.push(...ingredients);
    this.ingredientsChanged.emit([...(this.ingredients || [])]);
  }

  constructor() {}
}
