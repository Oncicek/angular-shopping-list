import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipe: Recipe | undefined;

  getRecipe(selectedRecipe: Recipe | undefined) {
    this.recipe = selectedRecipe;
  }

  onClick(recipe: Recipe | undefined) {
    console.log(this.recipe);
  }
}
