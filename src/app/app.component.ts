import { Component } from '@angular/core';
import { Features } from './shared/enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  featureFlag: Features = Features.recipe;
  FeaturesEnum = Features;

  onNavigate(feature: Features) {
    this.featureFlag = feature;
  }
}
