import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", loadChildren: () => import("./components/about/about.module").then(m => m.AboutModule) },
  { path: "products", loadChildren: () => import("./components/products/products.module").then(m => m.ProductsModule) },
  { path: "details/:id", loadChildren: () => import("./components/product-detail/product-detail.module").then(m => m.ProductDetailModule) },
  { path: "create", loadChildren: () => import("./components/create-product/create-product.module").then(m => m.CreateProductModule) },
  { path: "**", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
