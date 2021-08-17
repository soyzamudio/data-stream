import { Observable, ReplaySubject } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TwitterData } from '../../services/pubnub.service';
import { map, takeUntil } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';
import { RemoveDataFilter } from 'src/app/store/app.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent implements OnInit, OnDestroy {
  @Input() item: string;
  @Input() index: number;
  @Input() data$: Observable<TwitterData[]>;
  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  filterFeed(filter: string) {
    return this.data$?.pipe(
      takeUntil(this.destroyed$),
      map(tweets => tweets.filter(tweet => {
        // return if tweet has keyword and is within the last minute
        return tweet.text.toLowerCase().includes(filter.toLowerCase()) && (Date.now() - 60000) <= Number(tweet.timestamp_ms);
      })),
    );
  }

  removeFilter(position: number) {
    this.store.dispatch(new RemoveDataFilter(position));
  }
}
