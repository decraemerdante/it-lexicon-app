import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { APIService } from 'src/app/shared/api.service';

import { Title } from '@angular/platform-browser';
import { ArticleDto } from 'src/app/shared/API';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css'],
})
export class ArticleReadComponent implements OnInit {
  article: ArticleDto;
  constructor(
    private api: APIService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.api.articleClient.get(this.route.snapshot.params['id']).subscribe(
      (article) => {
        this.article = article;
        this.titleService.setTitle(article.title);
      },
      (error) => {
        this.router.navigateByUrl('');
      }
    );
  }
}
