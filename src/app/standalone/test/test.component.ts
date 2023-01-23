import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Route,
  Router,
  RouterLinkActive,
} from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { tap } from 'rxjs/operators';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  shouldRender: boolean = false;
  kocka: any;

  constructor(private router: Router) {
    //Router subscriber
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log('start');
        this.shouldRenderFunc();
        //do something on start activity
      }

      if (event instanceof NavigationError) {
        console.log('error');
        // Handle error
        console.error(event);
      }

      if (event instanceof NavigationEnd) {
        this.shouldRenderFunc();
        console.log('end');
        //do something on end activity
      }
    });
  }

  shouldRenderFunc() {
    this.shouldRender = this.router.url === '/form';
    this.kocka = this.router.url;
    console.log(this.router.url);
  }

  ngOnInit(): void {
    this.shouldRenderFunc();
  }
}
