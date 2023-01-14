import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  nameInput = new FormControl('Ahojky', { validators: Validators.required });
  amountInput = new FormControl(10, {
    validators: [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')],
  });
  subscription: Subscription | undefined;
  editForm: FormGroup = new FormGroup({
    nameInput: this.nameInput,
    amountInput: this.amountInput,
  });
  ingredients: Ingredient[] | undefined;
  editMode = false;
  editedItemIndex: number | undefined;
  editedItem: Ingredient | undefined;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.slService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.slService.getIngredient(index);

        this.editForm.setValue({
          nameInput: this.editedItem?.name,
          amountInput: this.editedItem?.amount,
        });
      }
    );
  }

  onSubmitForm() {
    if (this.editForm.valid) {
      const { nameInput, amountInput } = this.editForm.value;
      const newIngredient = new Ingredient(nameInput, amountInput);

      if (
        this.editMode &&
        this.editedItemIndex !== undefined &&
        this.editedItemIndex > -1
      ) {
        this.slService.updateIngredient(this.editedItemIndex, newIngredient);
      } else {
        this.slService.addIngredient(newIngredient);
      }

      this.editMode = false;
      this.editForm.reset();
    }
  }

  onClear() {
    this.editForm.reset();
    this.editMode = false;
  }

  onDelete() {
    if (this.editedItemIndex !== undefined && this.editedItemIndex > -1) {
      this.slService.deleteIngredient(this.editedItemIndex);
    }

    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
