import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { StoreService } from '../store.service';
import { User } from '../user.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  ]
})
export class MainPageComponent implements OnInit {

  userLogado! : User;

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.mostraUser();
    
  }

  mostraUser(){

    this.userLogado = this.storeService.getUser();
    console.log(this.userLogado);
    console.log("valor de cime é o user logado")
  }


}
