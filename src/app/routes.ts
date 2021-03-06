import { Routes, ROUTES } from '@angular/router';
import { ArticleAddComponent } from './articles/article-add/article-add.component';
import { ArticleDeleteComponent } from './articles/article-delete/article-delete.component';
import { ArticleReadComponent } from './articles/article-read/article-read.component';
import { ArticlesListComponent } from './articles/articles-list/articles-list.component';
import { LinkedArticlesEditComponent } from './articles/linked-articles-edit/linked-articles-edit.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

export const routes: Routes = [
  { path: 'category/add', component: CategoryAddComponent },
  { path: 'category', component: CategoryListComponent },
  { path: 'category/:id', component: CategoryEditComponent },
  { path: 'category/delete/:id', component: CategoryDeleteComponent },
  { path: 'article/add', component: ArticleAddComponent },
  { path: 'article/edit/:id', component: ArticleAddComponent },
  { path: 'article/delete/:id', component: ArticleDeleteComponent },
  { path: 'article/links/:id', component: LinkedArticlesEditComponent },
  { path: 'article/:id', component: ArticleReadComponent },
  { path: '', component: ArticlesListComponent },
];
