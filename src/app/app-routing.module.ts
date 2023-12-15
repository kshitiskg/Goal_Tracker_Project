import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AddGoalComponent } from './pages/add-goal/add-goal.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'addGoal',
    component:AddGoalComponent
  },
  {
    path:'category',
    component:CategoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
