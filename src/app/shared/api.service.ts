import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArticleClient, CategoryClient } from './API';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  articleClient: ArticleClient;
  categoryClient: CategoryClient;
  constructor(private http: HttpClient) {
    this.articleClient = new ArticleClient(http);
    this.categoryClient = new CategoryClient(http);
   }
}
