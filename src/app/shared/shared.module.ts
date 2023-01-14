import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [AlertComponent, DropdownDirective],
  imports: [CommonModule],
  exports: [AlertComponent, DropdownDirective, CommonModule],
})
export class SharedModule {}