import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { ArticleClient, CategoryClient, LinkedClient } from './API';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  url: string;
  articleClient: ArticleClient;
  categoryClient: CategoryClient;
  linkedClient: LinkedClient;
  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
    this.articleClient = new ArticleClient(http, this.url);
    this.categoryClient = new CategoryClient(http, this.url);
    this.linkedClient = new LinkedClient(http, this.url);
  }
}
