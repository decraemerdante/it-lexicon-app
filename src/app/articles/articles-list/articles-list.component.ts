import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ArticleDto, CategoryDto } from '../../shared/API';
import { APIService } from '../../shared/api.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css'],
})
export class ArticlesListComponent implements OnInit {
  categories: CategoryDto[];
  articles: ArticleDto[];
  allArticles: ArticleDto[];
  searchTerm: string;
  p: number = 1;
  total: number = 0;
  constructor(
    private api: APIService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  handleCatClick(event) {
    this.articles = [];
    let id = event.target.id;

    let activeBtn = document.getElementsByClassName('selected-category');

    while (activeBtn.length > 0) {
      activeBtn[0].classList.remove('selected-category');
    }
    event.target.classList.toggle('selected-category');

    if (id === 'all') {
      this.getCategories();
    } else {
      this.filterArticlesByCategory(id);
    }
  }
  filterArticlesByCategory(id: string) {
    this.spinner.show();
    this.api.articleClient.getByCategory(id).subscribe((data: ArticleDto[]) => {
      this.allArticles = data;
      let articlesFiltered = this.filterArticles();
      this.articles = articlesFiltered;

      this.spinner.hide();
    });
  }
  filterArticles() {
    let filterArticles = [];
    if (this.searchTerm != '' && this.searchTerm) {
      this.allArticles.forEach((article) => {
        if (
          article.title
            .toLocaleLowerCase()
            .indexOf(this.searchTerm.toLocaleLowerCase()) != -1
        ) {
          filterArticles.push(article);
        }
      });
    } else {
      filterArticles = this.allArticles;
    }
    return filterArticles;
  }

  getCategories() {
    this.spinner.show();
    this.api.categoryClient.getAll().subscribe(
      (data: CategoryDto[]) => {
        this.categories = data;

        this.api.articleClient.getAll().subscribe(
          (articles) => {
            this.allArticles = articles;
            let articlesFiltered = this.filterArticles();
            this.articles = articlesFiltered;
            this.spinner.hide();
          },
          (error) => {
            this.toastr.error('Something went wrong while getting articles');
          }
        );
      },
      (error) => {
        this.toastr.error('Something went wrong while getting categories');
      }
    );
  }

  search(data) {
    this.searchTerm = data.searchTerm;
    this.articles = this.filterArticles();
  }

  removeFilter() {
    this.searchTerm = '';
    this.articles = this.filterArticles();
  }
}
