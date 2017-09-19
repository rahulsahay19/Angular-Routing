import { Component, OnInit } from '@angular/core';
import { ReviewsService } from './reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers:[ReviewsService]
})
export class ReviewsComponent implements OnInit {

  private reviews:{id: number, reviewerName: string, comments: string,rating:number}[] = [];
  constructor(private reviewsService:ReviewsService) { }

  ngOnInit() {
    this.reviews=this.reviewsService.getReviews();
  }

}
