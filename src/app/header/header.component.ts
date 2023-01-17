import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../shared/services/logging.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private loggingService: LoggingService) {}

  toggleModal() {
    this.loggingService.toggleModal();
  }
}
