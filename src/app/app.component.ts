import { GetAppData } from './store/app.actions';
import { getData } from './store/app.selector';
import { select, Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from './store/app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data$: Observable<string> = this.store.pipe(select(getData));
  title = 'data-stream';
  constructor(private store: Store<AppState>) {
    this.store.dispatch(new GetAppData());
  }
}
