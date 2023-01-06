import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef:
    | ElementRef
    | undefined;
  @ViewChild('amountInput', { static: false }) amountInputRef:
    | ElementRef
    | undefined;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem() {
    const ingName = this.nameInputRef?.nativeElement.value;
    const amtName = this.amountInputRef?.nativeElement.value;
    const newIngredient = new Ingredient(ingName, amtName);
    this.slService.addIngredient(newIngredient);
  }

  ingredients: Ingredient[] | undefined;
}
