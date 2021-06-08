import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleClient, CategoryClient } from './shared/API';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ArticleClient, CategoryClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
