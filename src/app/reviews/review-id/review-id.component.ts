import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-review-id',
  templateUrl: './review-id.component.html',
  styleUrls: ['./review-id.component.css']
})
export class ReviewIdComponent {
  
    id: string;
    
      constructor(private route: ActivatedRoute) {
        route.params.subscribe(params => { this.id = params['id']; });
      }
  

}
