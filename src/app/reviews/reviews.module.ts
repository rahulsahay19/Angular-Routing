import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ReviewInfoComponent } from './review-info/review-info.component';
import { ReviewersInfoComponent } from './reviewers-info/reviewers-info.component';
import { ReviewIdComponent } from './review-id/review-id.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'review-info', component: ReviewInfoComponent },
    { path: 'reviewers-info', component: ReviewersInfoComponent },
    { path: ':id', component: ReviewIdComponent },
  ];

  @NgModule({
    declarations: [
      MainComponent,
      ReviewInfoComponent,
      ReviewersInfoComponent,
      ReviewIdComponent
    ],
    exports: [
      MainComponent,
      ReviewInfoComponent,
      ReviewersInfoComponent,
      ReviewIdComponent      
    ],
    imports: [
      CommonModule,
      RouterModule
    ]
  })
  export class ReviewsModule { }