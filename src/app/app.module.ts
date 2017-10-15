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

const appRoutes:Routes=[
 {path:'',component:HomeComponent},
 {path:'reviews',component:ReviewsComponent},
 {path:'movies',component:MoviesComponent},
 {path:'reviewers',component:ReviewersComponent},
 {path:'reviewers/:id/:name',component:ReviewerComponent}
 
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    ReviewsComponent,
    ReviewersComponent,
    ReviewerComponent,
    EditreviewerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
