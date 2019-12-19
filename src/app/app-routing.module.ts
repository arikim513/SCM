import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './scm-main/main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './scm-main/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  // {path: 'main', children:[
  //   {path: 'dashboard', component: MainDashboardComponent},
  // ]},
  // {path: 'product-list', component: ProductManagementComponent},
  // {path: 'category-list', component: CategoryManagementComponent},
  {path: 'total-summary', component: MainDashboardComponent},
  {path: '', redirectTo: 'total-summary', pathMatch:'full'},
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
