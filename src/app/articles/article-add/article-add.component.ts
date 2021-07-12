import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ArticleDto, CategoryDto } from 'src/app/shared/API';
import { APIService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css'],
})
export class ArticleAddComponent implements OnInit {
  article: ArticleDto;
  id: string;
  categories: CategoryDto[];
  constructor(
    private api: APIService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.article = {} as ArticleDto;
    console.log(this.article.categoryMaskId);
    this.spinner.show();

    this.id = this.route.snapshot.params['id'];

    this.api.categoryClient.getAll().subscribe((categories) => {
      this.categories = categories;
      if (this.id) {
        this.getArticle(this.id);
      } else {
        this.article.categoryMaskId = '00000000-0000-0000-0000-000000000000';
        this.spinner.hide();
      }
    });
  }
  getArticle(id: string) {
    this.api.articleClient.get(id).subscribe((data) => {
      this.article = data;
      this.spinner.hide();
    });
  }

  addArticle(data: ArticleDto) {
    this.spinner.show();
    if (this.id) {
      this.api.articleClient.update(this.article).subscribe(
        (response) => {
          this.spinner.hide();
          this.toastr.success('Article has been updated');
          this.router.navigateByUrl('/article/' + this.id);
        },
        (error) => {
          this.toastr.error('Something went wrong');
        }
      );
    } else {
      this.api.articleClient.add(this.article).subscribe(
        (response) => {
          this.spinner.hide();
          this.toastr.success('Article has been added');
          this.router.navigateByUrl('/article/' + response);
        },
        (error) => {
          this.toastr.error('Something went wrong');
        }
      );
    }
  }
}
