import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { APIService } from 'src/app/shared/api.service';
import {CategoryDto} from "../../shared/models/CategoryDto";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categories: CategoryDto[];
  constructor(private api: APIService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.spinner.show();
    this.getCategories();
  }

  getCategories() {
    this.api.categoryClient.getAll().subscribe((data: CategoryDto[]) => {
      this.categories = data;
      this.spinner.hide();
    });
  }
}
