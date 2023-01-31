import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  formGroup: FormGroup | null = null;
  nameInput: FormControl = new FormControl('Aladin');
  kockaInput: FormControl = new FormControl('Červená');
  urlInput: FormControl = new FormControl('https://picsum.photos/200');
  // https://m.media-amazon.com/images/I/61m+AKsEPTL._AC_SL1500_.jpg

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: this.nameInput,
      kocka: this.kockaInput,
      url: this.urlInput,
    });
  }

  postData() {
    this.http
      .post('http://localhost:3000/admin/add-product', this.formGroup?.value, {
        observe: 'response',
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      })
      .subscribe((data) => console.log(data.body));
  }

  getData() {
    this.http
      .get('http://localhost:3000/shop')
      .subscribe((data) => console.log(data));
  }

  ngOnDestroy(): void {}

  onSubmit() {
    this.postData();
  }

  onFajrung() {
    this.getData();
  }
}
