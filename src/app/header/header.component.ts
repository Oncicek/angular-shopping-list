import { Component, EventEmitter, Output } from '@angular/core';
import { Features } from '../shared/enums';
import { LoggingService } from '../shared/services/logging.service';

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

  constructor(private loggingService: LoggingService) {}

  toggleModal() {
    this.loggingService.toggleModal();
  }
}
