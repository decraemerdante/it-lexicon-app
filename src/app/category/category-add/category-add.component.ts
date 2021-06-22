import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { APIService } from 'src/app/shared/api.service';
import {CategoryDto} from "../../shared/models/CategoryDto";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css'],
})
export class CategoryAddComponent implements OnInit {
  name;
  constructor(
    private api: APIService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {}

  addCategory(data: CategoryDto) {
    this.spinner.show();

    this.api.categoryClient.add(data.name).subscribe((response) => {
      this.spinner.hide();
      this.router.navigate(['category']);
    });
  }
}
