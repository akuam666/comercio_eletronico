import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { SignupComponent } from './signup/signup.component';
import { UserpageComponent } from './userpage/userpage.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  //{path: '', redirectTo: 'login', pathMatch: 'full'},

 {path: '', component : MainPageComponent},
 {path:'produtos', component : ProdutosComponent},
 {path: 'produtos/:id', component: ProdutoComponent},
 {path: 'login', component:LoginComponent },
 {path: 'signup', component:SignupComponent},
 {path: 'wish', component:WishlistComponent, canActivate:[AuthGuard]},
 {path: 'user' , component:UserpageComponent, canActivate:[AuthGuard]},
 {path: 'adminpage' , component:AdminpageComponent, canActivate:[AuthGuard]}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
