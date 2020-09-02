import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './/header/header.component';
import { FooterComponent } from './/footer/footer.component';
import { UploadComponent } from './/upload/upload.component';
import { CategoriesComponent } from './/categories/categories.component';
import { LoginComponent } from './/login/login.component';
import { OwnerComponent } from './/owner/owner.component';
import { ProfileComponent } from './/profile/profile.component';
import { SearchComponent } from './/search/search.component';
import { MessagesComponent } from './/messages/messages.component';
import { MyProductsComponent } from './/my-products/my-products.component';
import { ProductComponent } from './/product/product.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './/home/home.component';


//servicios
import {ServService} from './serv.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UploadComponent,
    CategoriesComponent,
    LoginComponent,
    OwnerComponent,
    ProfileComponent,
    SearchComponent,
    MessagesComponent,
    MyProductsComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,NgbCarouselModule
  ],
  providers: [
    ServService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
