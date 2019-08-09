import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoViewPageComponent } from './video-view-page/video-view-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'trending', loadChildren: './trending/trending.module#TrendingModule' },
  { path: 'search', loadChildren: './search/search.module#SearchModule' },
  { path: 'video-view/:id', component: VideoViewPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
