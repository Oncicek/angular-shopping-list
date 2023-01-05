import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

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
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  ngOnInit(): void {}

  onAddItem() {
    const ingName = this.nameInputRef?.nativeElement.value;
    const amtName = this.amountInputRef?.nativeElement.value;
    const newIngredient = new Ingredient(ingName, amtName);
    this.ingredientAdded.emit(newIngredient);
  }

  ingredients: Ingredient[] | undefined;
}
