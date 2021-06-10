import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { CategoryDto } from 'src/app/shared/API';
import { APIService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: CategoryDto[]
  constructor(private api : APIService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show()
    this.getCategories();
  }

  deleteCategory(maskId){
    this.spinner.show();

    this.api.categoryClient.delete(maskId).subscribe(response => {
      this.getCategories();
    })
  }

  getCategories(){
    this.api.categoryClient.getAll().subscribe((data :CategoryDto[]) => {
      this.categories = data;
      this.spinner.hide();
    });
  }

}
