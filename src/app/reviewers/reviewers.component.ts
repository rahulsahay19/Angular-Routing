import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviewers',
  templateUrl: './reviewers.component.html',
  styleUrls: ['./reviewers.component.css']
})
export class ReviewersComponent implements OnInit  {
 
  constructor(private route:ActivatedRoute){
    
  }
  ngOnInit() {
  
  }

  reviewers =[
    {
      id:1,
      name:'Rahul'
    },
    {
      id:2,
      name:'Rohit'
    },
    {
      id:3,
      name:'Mohit'
    }
  ]

}
