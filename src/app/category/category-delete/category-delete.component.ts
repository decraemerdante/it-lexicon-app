import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryDto } from 'src/app/shared/API';
import { APIService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css'],
})
export class CategoryDeleteComponent implements OnInit {
  category: CategoryDto;

  constructor(
    private api: APIService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.api.categoryClient.get(this.route.snapshot.params['id']).subscribe(
      (data) => {
        this.category = data;
        this.spinner.hide();
      },
      (error) => {
        this.router.navigateByUrl('/category');
      }
    );
  }

  deleteCategory() {
    this.spinner.show();

    this.api.categoryClient.delete(this.category.id).subscribe((response) => {
      this.spinner.hide();
      this.router.navigateByUrl('/category');
    });
  }

  cancel() {
    this.router.navigateByUrl('/category');
  }
}
