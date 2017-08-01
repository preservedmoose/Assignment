import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountersListComponent } from './components/counters-list.component';
import { CountersItemComponent } from './components/counters-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CountersListComponent,
    CountersItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
