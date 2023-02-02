import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface Product {
  id: string;
  kocka: string;
  name: string;
  url: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnDestroy {
  formGroup: FormGroup | null = null;
  nameInput = new FormControl('Aladin');
  kockaInput = new FormControl('Červená');
  urlInput = new FormControl(
    'https://m.media-amazon.com/images/I/61m+AKsEPTL._AC_SL1500_.jpg'
  );
  products: Product[] = [];
  getDataVar = this.http.get<Product[]>('http://localhost:3000/shop/products');

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: this.nameInput,
      kocka: this.kockaInput,
      url: this.urlInput,
    });
  }

  finalizeFetch() {
    this.getDataVar.subscribe((data) => {
      this.products = data;
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
      .subscribe({
        next: () => this.finalizeFetch(),
        error: () => this.finalizeFetch(),
      });
  }

  getData() {
    this.getDataVar.subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

  ngOnDestroy(): void {}

  onSubmit() {
    this.postData();
  }

  onFajrung() {
    this.getData();
  }
}
