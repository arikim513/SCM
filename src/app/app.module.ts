import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ScmMainModule } from './scm-main/scm-main.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /*angular mpdules*/
    BrowserModule,
    AppRoutingModule,
    /*app mpdules*/
    ScmMainModule,
    ProductModule,
    CategoryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
