import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

import { AppComponent } from '../components/app.component';
import { Titles } from '../components/app.title';

@NgModule({
  imports:[BrowserModule],
  declarations: [AppComponent, Titles],
  bootstrap: [AppComponent, Titles]
})

export class AppModule {

}
