import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagementComponent } from './product-management/product-management.component';


const routes: Routes = [
  {path: 'product-list', component: ProductManagementComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
