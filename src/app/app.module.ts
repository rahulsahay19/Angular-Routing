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
import { AppRoutingModule } from './app.routing-module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

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
    ReviewsModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
