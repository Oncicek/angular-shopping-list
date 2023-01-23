import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { formReducer } from './store/form.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [FormComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormRoutingModule,
    HttpClientModule,
    StoreModule.forFeature('form', formReducer),
  ],
})
export class FormModule {}
