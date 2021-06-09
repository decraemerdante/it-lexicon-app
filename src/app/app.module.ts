import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { ArticleClient, CategoryClient } from './shared/API';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { APIService } from './shared/api.service';
import { ArticlesListComponent } from './articles-list/articles-list.component';

import { LoadingComponent } from './shared/loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,  
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule ,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: "home", component: AppComponent},
      {path: "home/:searchTerm", component: AppComponent},
      {path: "", component: AppComponent}
    ]),
    FormsModule
  ],
  providers: [ArticleClient, CategoryClient, HttpClient, APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
