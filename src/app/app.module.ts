import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "angularfire2";
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { ScmMainModule } from './scm-main/scm-main.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    /*angular mpdules*/
    BrowserModule,
    /*app mpdules*/
    ScmMainModule,
    ProductModule,
    CategoryModule,
    AppRoutingModule,/*いつも最後にインポート*/
    /*3d module*/
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
