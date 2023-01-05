import { Component, EventEmitter, Output } from '@angular/core';
import { Features } from '../shared/enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<Features>();
  FeaturesEnum = Features;

  onSelect(feature: Features) {
    this.featureSelected.emit(feature);
  }
}
