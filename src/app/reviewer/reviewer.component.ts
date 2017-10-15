import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-reviewer',
  templateUrl: './reviewer.component.html',
  styleUrls: ['./reviewer.component.css']
})
export class ReviewerComponent implements OnInit {
 
  reviewer:{id:number,name:string};

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.reviewer={
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
      }
     
      console.log("Query Parameters:- ",this.route.snapshot.queryParams);
      console.log("Fragments:- ",this.route.snapshot.fragment);

    this.route.params
        .subscribe(
          (params:Params) =>{
            this.reviewer.id=params['id'];
            this.reviewer.name=params['name'];
          }
        );
  }

}
