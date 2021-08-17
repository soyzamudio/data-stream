import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TimeagoModule } from 'ngx-timeago';
import { PubNubAngular } from 'pubnub-angular2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppEffects } from './store/app.effects';
import { appReducer } from './store/app.reducer';
import { TweetCardComponent } from './shared/components/tweet-card/tweet-card.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FilterListComponent } from './shared/components/filter-list/filter-list.component';
import { FilterItemComponent } from './shared/components/filter-item/filter-item.component';
@NgModule({
  declarations: [AppComponent, TweetCardComponent, SidebarComponent, FilterListComponent, FilterItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TimeagoModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(
      {
        app: appReducer,
      },
    ),
    FontAwesomeModule,
  ],
  providers: [
    PubNubAngular,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }
}
