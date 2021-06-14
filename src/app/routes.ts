import { Routes, ROUTES } from '@angular/router';
import { ArticleAddComponent } from './articles/article-add/article-add.component';
import { ArticleReadComponent } from './articles/article-read/article-read.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

export const routes: Routes = [
  { path: 'category/add', component: CategoryAddComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'category/:id', component: CategoryEditComponent },
  { path: 'article/add', component: ArticleAddComponent },
  { path: 'article/edit/:id', component: ArticleAddComponent },
  { path: 'article/:id', component: ArticleReadComponent },
  { path: '', component: ArticlesListComponent },
];
