import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ReviewersComponent } from './reviewers/reviewers.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { routes as childRoutes, ReviewsModule, routes } from './reviews/reviews.module';
import { AuthGuard } from './auth-guard.service';

const appRoutes:Routes=[
    //Basic Routes
   {path:'',component:HomeComponent},
  //  {path:'reviews',component:ReviewsComponent},
   {path:'movies',component:MoviesComponent},
   {path:'reviewers',component:ReviewersComponent}, 
   {path:'reviewers/:id/:name',component:ReviewerComponent},
  
   //Child or Nested Routes 
    {path:'reviews', canActivate:[AuthGuard], component:ReviewsComponent,children:childRoutes},
  
    //not found
    {path:'not-found',component:NotFoundComponent},
    {path:'**',redirectTo:'/not-found'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

