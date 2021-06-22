import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { APIService } from 'src/app/shared/api.service';
import { CategoryDto} from "../../shared/API";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
})
export class CategoryEditComponent implements OnInit {
  category: CategoryDto;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private api: APIService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.spinner.show();
    this.api.categoryClient
      .get(this.route.snapshot.params['id'])
      .subscribe((category) => {
        this.category = category;
        this.spinner.hide();
      });
  }

  editCategory(data) {
    this.spinner.show();
    this.api.categoryClient.update(this.category).subscribe((response) => {
      this.spinner.hide();
      this.router.navigate(['category']);
    });
  }
}
