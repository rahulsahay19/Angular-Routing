import { Component, OnInit } from '@angular/core';
import { ReviewsService } from './reviews.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  providers:[ReviewsService]
})
export class ReviewsComponent implements OnInit {

  private reviews:{id: number, reviewerName: string, comments: string,rating:number}[] = [];
  constructor(private reviewsService:ReviewsService,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews=this.reviewsService.getReviews();
  }

  goToReview(id: string): void {
    this.router.navigate(['./', id], {relativeTo: this.route});
  }

}
