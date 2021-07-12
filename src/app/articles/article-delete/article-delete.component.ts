import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ArticleDto } from 'src/app/shared/API';
import { APIService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-article-delete',
  templateUrl: './article-delete.component.html',
  styleUrls: ['./article-delete.component.css'],
})
export class ArticleDeleteComponent implements OnInit {
  article: ArticleDto;
  constructor(
    private api: APIService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.api.articleClient.get(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.article = data;
        this.spinner.hide();
      },
      (error) => {
        this.router.navigateByUrl('');
      }
    );
  }

  deleteArticle() {
    this.spinner.show();
    this.api.articleClient.delete(this.article.maskId).subscribe(
      (response) => {
        this.spinner.hide();
        this.toastr.success('Article has been deleted');
        this.router.navigateByUrl('');
      },
      (error) => {
        this.toastr.error('Something went wrong');
      }
    );
  }

  cancel() {
    this.router.navigateByUrl('');
  }
}
