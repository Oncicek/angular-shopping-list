import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggingService implements OnInit {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }

  isOpen: boolean = false;
  isOpenSubject: Subject<boolean> = new Subject();

  toggleModal() {
    this.isOpenSubject.next((this.isOpen = !this.isOpen));
  }

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
