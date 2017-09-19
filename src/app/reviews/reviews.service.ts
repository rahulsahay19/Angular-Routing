import { Injectable } from '@angular/core';

@Injectable()
export class ReviewsService {

    private reviews= [
        {id:1, reviewerName:'Rahul', comments:'Awesome', rating:5 },
        {id:2, reviewerName:'Rohit', comments:'Nice', rating:4 },
        {id:3, reviewerName:'Mohit', comments:'Good', rating:3 }
    ]
    constructor() { }

    getReviews(){
        return this.reviews;
    }

    getReview(id:number){
     const review=this.reviews.find(
         (r)=> {
              return r.id==id;
     })
     return review;
    }

    updateReview(id: number, reviewerName:string, comments:string, rating:number){
        const review=this.reviews.find(
            (r)=>{
                return r.id==id
            })
        if(review){
            review.reviewerName=reviewerName;
            review.comments=comments;
            review.rating=rating;
        }
    }
}