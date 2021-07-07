import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ArticleDto, LinkedArticlesDto } from 'src/app/shared/API';
import { APIService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-linked-articles-edit',
  templateUrl: './linked-articles-edit.component.html',
  styleUrls: ['./linked-articles-edit.component.css'],
})
export class LinkedArticlesEditComponent implements OnInit {
  articles: ArticleDto[];
  mainArticle: ArticleDto;
  linkedArticles: ArticleDto[];
  filteredArticles: ArticleDto[];
  searchTerm;
  constructor(
    private api: APIService,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.spinner.show();
    let maskId = this.route.snapshot.params['id'];

    this.api.linkedClient
      .getLinkedArticlesOverview(maskId)
      .subscribe((response) => {
        this.articles = response.allArticles.filter(function (article) {
          return article.maskId !== maskId;
        });
        this.filteredArticles = this.articles;
        this.mainArticle = response.mainArticle;
        this.linkedArticles = response.linkedArticles;
        this.spinner.hide();
      });
  }

  getActiveClass(id) {
    if (this.isLinked(id)) {
      return 'active';
    }
    return '';
  }

  isLinked(id) {
    let findArticle = this.linkedArticles.find(function (article) {
      return article.maskId == id;
    });

    if (findArticle) {
      return true;
    }
    return false;
  }

  handleClick(id) {
    if (this.isLinked(id)) {
      this.removeLink(id);
    } else {
      this.addLink(id);
    }
  }

  removeLink(id: any) {
    this.spinner.show();

    let linkedArticles = {
      articleId: this.route.snapshot.params['id'],
      linkedArticleId: id,
    } as LinkedArticlesDto;

    this.api.linkedClient
      .deleteLinkedArticle(linkedArticles)
      .subscribe((response) => {
        this.spinner.hide();
        this.fetchData();
      });
  }

  addLink(id: any) {
    this.spinner.show();

    let linkedArticles = {
      articleId: this.route.snapshot.params['id'],
      linkedArticleId: id,
    } as LinkedArticlesDto;

    this.api.linkedClient
      .addLinkedArticle(linkedArticles)
      .subscribe((response) => {
        this.spinner.hide();
        this.fetchData();
      });
  }

  search(data) {
    let searchTerm = data.searchTerm;
    if (searchTerm && searchTerm != '') {
      this.filteredArticles = this.articles.filter(function (article) {
        return (
          article.title
            .toLocaleLowerCase()
            .indexOf(searchTerm.toLocaleLowerCase()) != -1
        );
      });
    } else {
      this.removeFilter();
    }
  }
  removeFilter() {
    this.searchTerm = '';
    this.filteredArticles = this.articles;
  }
}
