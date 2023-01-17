import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { KockaDirective } from './directives/kocka.directive';

@NgModule({
  declarations: [AlertComponent, DropdownDirective, KockaDirective],
  imports: [CommonModule],
  exports: [AlertComponent, DropdownDirective, CommonModule, KockaDirective],
})
export class SharedModule {}
