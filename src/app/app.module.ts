import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { DropdownDirective } from './shared/dropdown.directive';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { MainPageComponent } from './main-page/main-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoComponent } from './produtos/produto/produto.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductItemComponent } from './produtos/product-item/product-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './produtos/filter/filter.component';
import { UserpageComponent } from './userpage/userpage.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    FooterComponent,
    MainPageComponent,
    ProdutosComponent,
    ProdutoComponent,
    LoginComponent,
    SignupComponent,
    WishlistComponent,
    ProductItemComponent,
    FilterComponent,
    UserpageComponent,
 
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add multiple icons to the library
    library.addIcons(fasStar, farStar);
  }
 }
