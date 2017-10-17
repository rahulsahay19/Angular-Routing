import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewersComponent } from './reviewers/reviewers.component';
import { ReviewerComponent } from './reviewer/reviewer.component';
import { EditreviewerComponent } from './editreviewer/editreviewer.component';
import { routes as childRoutes, ReviewsModule } from './reviews/reviews.module';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes:Routes=[
  //Basic Routes
 {path:'',component:HomeComponent},
//  {path:'reviews',component:ReviewsComponent},
 {path:'movies',component:MoviesComponent},
 {path:'reviewers',component:ReviewersComponent}, 
 {path:'reviewers/:id/:name',component:ReviewerComponent},

 //Child or Nested Routes 
  {path:'reviews', component:ReviewsComponent,children:childRoutes},

  //not found
  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'/not-found'}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    ReviewsComponent,
    ReviewersComponent,
    ReviewerComponent,
    EditreviewerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReviewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
