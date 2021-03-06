import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';
import { CategoryRoutingModule } from '../category/category-routing.module';
import { ProductRoutingModule } from '../product/product-routing.module';

const CORE_COMPONENTS = [
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
  MainDashboardComponent,
  PageNotFoundComponent
]

@NgModule({
  declarations: CORE_COMPONENTS,
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: CORE_COMPONENTS
})
export class ScmMainModule { }
