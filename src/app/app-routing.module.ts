import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UploadComponent } from './upload/upload.component';
import { SearchComponent } from './search/search.component';
import { OwnerComponent } from './owner/owner.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { MessagesComponent } from './messages/messages.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"usuario",component:ProfileComponent},
  {path:"siles",component:MyProductsComponent},
  {path:"subir",component:UploadComponent},
  {path:"buscar",component:SearchComponent},
  {path:"producto",component:ProductComponent},
  {path:"owner",component:OwnerComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"message",component:MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
