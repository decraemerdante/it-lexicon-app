import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ArticleDto } from 'src/app/shared/API';
import { APIService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css']
})
export class ArticleReadComponent implements OnInit {
  article: ArticleDto;
  constructor(private api : APIService, private spinner: NgxSpinnerService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.api.articleClient.get(this.route.snapshot.params['id']).subscribe(article => {
      this.article = article;
    })
  }

}
