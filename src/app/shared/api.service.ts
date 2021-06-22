import { HttpClient } from '@angular/common/http';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';
import { ArticleClient, ArticleDto, CategoryClient, FileResponse } from './API';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { UrlHelper } from './helpers/UrlHelper';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  url: string;
  articleClient: ArticleClient;
  categoryClient: CategoryClient;
  constructor(private http: HttpClient) {
    this.url = environment.apiUrl;
    this.articleClient = new ArticleClient(http, this.url);
    this.categoryClient = new CategoryClient(http, this.url);
  }

  add(article: ArticleDto): Observable<string> {
    return this.articleClient.add(this.treatArticle(article));
  }

  update(article: ArticleDto): Observable<FileResponse | null> {
    return this.articleClient.update(this.treatArticle(article));
  }

  treatArticle(article: ArticleDto): ArticleDto {
    if (article) {
      article.content = UrlHelper.hideInternalUrls(article.content);
    }

    return article;
  }
}
