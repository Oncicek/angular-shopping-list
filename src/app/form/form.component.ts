import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, pipe, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  formGroup: FormGroup | null = null;
  nameInput: FormControl = new FormControl('Aladin');
  kockaInput: FormControl = new FormControl('Červená');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      nameInput: this.nameInput,
      kockaInput: this.kockaInput,
    });
  }

  postData() {
    this.http
      .post('http://localhost:3000/kocka', this.formGroup?.value, {
        observe: 'response',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .subscribe();
  }

  ngOnDestroy(): void {}

  onSubmit() {
    this.postData();
  }

  onFajrung() {}
}
