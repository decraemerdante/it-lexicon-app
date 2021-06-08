import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ArticleClient, ArticleDto } from './shared/API';
import { APIService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'it-lexicon-app';
  
  articles: ArticleDto[]
  constructor(private service: APIService){
    
  }

  ngOnInit(): void {
    this.service.categoryClient.getAll().subscribe(data => console.log(data));
  }
}
