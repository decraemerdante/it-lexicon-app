import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ArticleClient, CategoryClient } from './shared/API';
import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { APIService } from './shared/api.service';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';

import { LoadingComponent } from './shared/loading/loading.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ArticleAddComponent } from './articles/article-add/article-add.component';
import { ArticleReadComponent } from './articles/article-read/article-read.component';
import {
  AngularEditorComponent,
  AngularEditorModule,
} from '@kolkov/angular-editor';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    LoadingComponent,
    CategoryAddComponent,
    CategoryListComponent,
    CategoryEditComponent,
    NavbarComponent,
    ArticleAddComponent,
    ArticleReadComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularEditorModule,
  ],
  providers: [ArticleClient, CategoryClient, HttpClient, APIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
