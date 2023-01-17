import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[kocka]',
})
export class KockaDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = '#000';
    this.element.nativeElement.style.color = '#fff';
  }
}
