import { Component, OnInit } from '@angular/core';
import { ArticleClient, ArticleDto } from './shared/API';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'it-lexicon-app';

  articles: ArticleDto[]
  constructor(private articleClient: ArticleClient){}

  ngOnInit(): void {
    this.articleClient.getAll().subscribe(data => console.log(data));
  }
}
