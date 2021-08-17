import { PubnubService } from './../../services/pubnub.service';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { TwitterData } from '../../services/pubnub.service';
import { AppState } from 'src/app/store/app.reducer';
import { map, takeUntil } from 'rxjs/operators';
import { RemoveDataFilter } from 'src/app/store/app.actions';
import { getHashtags } from 'src/app/store/app.selector';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit {
  @Input() data$: Observable<TwitterData[]>;
  hashtags$: Observable<string[]> = this.store.pipe(takeUntil(this.pns.destroyed$), select(getHashtags));

  constructor(private store: Store<AppState>, private pns: PubnubService) { }

  ngOnInit(): void {}
}
