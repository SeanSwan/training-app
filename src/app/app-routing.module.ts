import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VideosComponent } from './videos/videos.component';
import { PackagesComponent } from './packages/packages.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { SwizzleComponent } from './swizzle/swizzle.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'videos', component: VideosComponent},
{path: 'packages', component: PackagesComponent},
{path: 'swizzle', component: SwizzleComponent},

{path: 'login', component: LoginComponent},
{path: 'news', component: NewsComponent}

];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
