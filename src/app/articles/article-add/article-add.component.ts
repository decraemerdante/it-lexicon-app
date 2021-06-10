import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { ArticleDto, CategoryDto } from 'src/app/shared/API';
import { APIService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.css']
})
export class ArticleAddComponent implements OnInit {
  article: ArticleDto; 
  categories: CategoryDto[];
  constructor(private api: APIService, private router : Router,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {  
    this.spinner.show();
    this.api.categoryClient.getAll().subscribe(categories => {
      this.categories = categories;
      this.spinner.hide();      
    })
  }

  addArticle(data: ArticleDto){
      this.spinner.show();
      this.api.articleClient.add(data).subscribe(response => {
        this.spinner.hide();
        
        this.router.navigateByUrl("/article/" + response);
      })
  }

}
