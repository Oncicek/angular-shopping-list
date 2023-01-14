import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggingService } from './shared/services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  isOpenSubscription: Subscription = new Subscription();
  isOpen: boolean | undefined;

  constructor(private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.isOpenSubscription = this.loggingService.isOpenSubject.subscribe({
      next: (isOpen) => {
        this.isOpen = isOpen;
      },
    });
  }

  ngOnDestroy(): void {
    this.isOpenSubscription.unsubscribe();
  }
}
