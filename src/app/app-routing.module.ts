import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssortedProductsComponent } from './component/assorted-products/assorted-products.component';
import { CartComponent } from './component/cart/cart.component';

const routes: Routes = [
  {path:'', redirectTo:'assorted-products',pathMatch:'full'},
  {path:'assorted-products', component: AssortedProductsComponent},
  {path:'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
