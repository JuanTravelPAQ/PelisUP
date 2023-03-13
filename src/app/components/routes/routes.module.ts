import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SeriesComponent } from './series/series.component';
import { MoviesComponent } from './movies/movies.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    SeriesComponent,
    MoviesComponent,
    LoginComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent, SeriesComponent, MoviesComponent, LoginComponent],
})
export class RoutesModule {}
