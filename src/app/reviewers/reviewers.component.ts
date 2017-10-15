import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviewers',
  templateUrl: './reviewers.component.html',
  styleUrls: ['./reviewers.component.css']
})
export class ReviewersComponent  {

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
