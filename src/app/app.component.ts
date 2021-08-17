import { map, takeUntil } from 'rxjs/operators';
import { RemoveDataFilter, SetDataFilter } from './store/app.actions';
import { Component, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { PubNubAngular } from 'pubnub-angular2';
import { Observable, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PubnubService, TwitterData } from './shared/services/pubnub.service';
import { AppState } from './store/app.reducer';
import { getData, getHashtags } from './store/app.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  data$: Observable<TwitterData[]> = this.store.pipe(takeUntil(this.pns.destroyed$), select(getData));
  filterInput: string = '';

  constructor(
    private store: Store<AppState>,
    private pubnub: PubNubAngular,
    private pns: PubnubService
  ) {
    this.pubnub.init({
      publishKey: environment.pubKey,
      subscribeKey: environment.subKey,
    });
    this.pns.getData();
  }

  setNewFilter(filter: string) {
    this.store.dispatch(new SetDataFilter(filter));
    this.filterInput = '';
  }

  ngOnDestroy() {
    this.pns.destroyed$.next(true);
    this.pns.destroyed$.complete();
  }
}
