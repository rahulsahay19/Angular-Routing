import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { ReviewsComponent } from './reviews/reviews.component';

const appRoutes:Routes=[
 {path:'',component:HomeComponent},
 {path:'reviews',component:ReviewsComponent},
 {path:'movies',component:MoviesComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
