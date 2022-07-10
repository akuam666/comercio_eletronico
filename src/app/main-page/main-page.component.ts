import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { Produto } from '../produtos/produto.model';
import { ServprodutosService } from '../produtos/servprodutos.service';
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

  listaDestaques: Produto[]=[];

  constructor(private storeService: StoreService, private servprodutos: ServprodutosService) { }

  ngOnInit(): void {
    this.mostraUser();
    this.leDestaques();
    
  }

  mostraUser(){

    this.userLogado = this.storeService.getUser();
    console.log(this.userLogado);
    console.log("valor de cime é o user logado")
  }

  leDestaques() {
    this.servprodutos.getDestaques().subscribe({
      next: (produtos : Produto[]) => {        
        this.listaDestaques=produtos;  
        console.log(this.listaDestaques)  
      }
    });
  }

  mostraProduto(id : number) {
    this.servprodutos.getProduto(id).subscribe(
      (produto : Produto) => {   
        console.log(produto);       
      }
    )
  }


}
