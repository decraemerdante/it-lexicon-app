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
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryListComponent } from './category/category-list/category-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,  
    LoadingComponent,CategoryAddComponent, CategoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule ,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: "category/add", component: CategoryAddComponent},
      {path: "category", component: CategoryListComponent},
      {path: "home", redirectTo: ''},      
      {path: "", component: ArticlesListComponent}
    ]),
    FormsModule
  ],
  providers: [ArticleClient, CategoryClient, HttpClient, APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
