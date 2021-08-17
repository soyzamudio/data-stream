import { Component, Input, OnInit } from '@angular/core';
import { TwitterData } from '../../services/pubnub.service';

@Component({
  selector: 'app-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss']
})
export class TweetCardComponent implements OnInit {
  @Input()
  tweet: TwitterData;

  constructor() { }

  ngOnInit(): void {
  }

}
