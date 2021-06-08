import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleClient, CategoryClient } from './shared/API';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { APIService } from './shared/api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ArticleClient, CategoryClient, HttpClient, APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
