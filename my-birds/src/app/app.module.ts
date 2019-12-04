import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BirdListComponent } from './birds/bird-list/bird-list.component';
import { BirdCardComponent } from './birds/bird-card/bird-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BirdListComponent,
    BirdCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
