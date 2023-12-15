import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component'
import { FormsModule } from '@angular/forms';
import { AddGoalComponent } from './pages/add-goal/add-goal.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddGoalComponent,
    CategoryComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
