import { ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { PubNubAngular } from 'pubnub-angular2';
import { AppState } from 'src/app/store/app.reducer';
import { GetAppData } from './../../store/app.actions';

export interface TwitterUser {
  name: string;
  screen_name: string;
  profile_image_url: string;
}

export interface TwitterData {
  text: string,
  user: TwitterUser
  timestamp_ms: string;
  created_at: string;
  reply_count: number;
  retweet_count: number;
  favorite_count: number;
}

export interface PubnubData {
  actualChannel: any;
  channel: string;
  message: TwitterData
  publisher: string;
  subscribedChannel: string;
  subscription: any;
}

@Injectable({
  providedIn: 'root',
})
export class PubnubService {
  destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  constructor(private pubnub: PubNubAngular, private store: Store<AppState>) {}

  getData() {
    this.pubnub.getMessage('pubnub-twitter', (msg: PubnubData) => this.store.dispatch(new GetAppData(msg.message)));
    this.pubnub.subscribe({ channels: ['pubnub-twitter'], triggerEvents: true, withPresence: true });
  }

  cleanData() {
    this.pubnub.unsubscribe({ channels: ['pubnub-twitter'] });
  }
}
