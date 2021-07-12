import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterEvent,
} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ArticleDto, ChangeLogDto, LogItemEnum } from 'src/app/shared/API';
import { APIService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-article-read',
  templateUrl: './article-read.component.html',
  styleUrls: ['./article-read.component.css'],
})
export class ArticleReadComponent implements OnInit {
  article: ArticleDto;
  linkedArticles: ArticleDto[];
  changelog: ChangeLogDto;
  constructor(
    private api: APIService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.api.articleClient.get(this.route.snapshot.params['id']).subscribe(
      (article) => {
        this.article = article;
        if (article.changeLogs && article.changeLogs.length > 0) {
          this.changelog = article.changeLogs[article.changeLogs.length - 1];
        }

        this.api.linkedClient
          .getLinkedArticles(this.route.snapshot.params['id'])
          .subscribe((response) => {
            this.linkedArticles = response;
            this.spinner.hide();
          });
      },
      (error) => {
        this.router.navigateByUrl('');
      }
    );
  }

  setChangelog() {
    let changelogString = '';
    switch (this.changelog.type) {
      case LogItemEnum.CREATED:
        changelogString = 'Created on ';
        break;
      case LogItemEnum.UPDATED:
        changelogString = 'Updated on ';
        break;
    }

    changelogString += '' + new Date(this.changelog.date).toLocaleString();

    return changelogString;
  }
}
