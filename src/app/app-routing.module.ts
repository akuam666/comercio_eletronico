import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  //{path: '', redirectTo: 'login', pathMatch: 'full'},

  {path: '', component : MainPageComponent},
 {path:'produtos', component : ProdutosComponent},
 {path: 'produtos/:id', component: ProdutoComponent},
 {path: 'login', component:LoginComponent },
 {path: 'signup', component:SignupComponent},
 {path: 'wishlist', component:WishlistComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
