import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.reducer';
import { startAuth } from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  isLoginMode: Observable<{ isLoginMode: boolean }> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isLoginMode = this.store.select('auth');
  }

  onClick() {
    this.store.dispatch(startAuth());
  }
}
