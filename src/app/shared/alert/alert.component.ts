import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit, OnDestroy {
  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  toggleButton() {
    this.loggingService.toggleModal();
  }
  @Input() message: string | undefined;
}
