import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PackagesComponent } from './packages/packages.component';
import { VideosComponent } from './videos/videos.component';
import { LoginComponent } from './login/login.component';

import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SwizzleComponent } from './swizzle/swizzle.component';
import { MatSelectModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { DataService } from './data.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './news/news.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PackagesComponent,
    VideosComponent,
    LoginComponent,
    ProfileComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    SwizzleComponent,
    NewsComponent,
   
  ],
  imports: [
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule, 
    MatCheckboxModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    MatToolbarModule,
    
    
    
    AppRoutingModule
  ],
  exports: [
    FormsModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
