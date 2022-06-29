import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from './produto.model';
import { ServprodutosService } from './servprodutos.service';

import { WhishlistService } from '../whishlist.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})

export class ProdutosComponent implements OnInit {

  

  listaProdutos: Produto[] = [];

   produto!: Produto;

   categoria : any;

  // addedToWishlist: boolean = false;

  wishlist : number[] = [];
  
  constructor(private servprodutos: ServprodutosService, private router: Router, private whislistService: WhishlistService) { }

  ngOnInit(): void {

    this.leProdutos();
    this.leWishlist();
  }


  leProdutos() {
    this.servprodutos.getProdutos().subscribe({
      next: (produtos : Produto[]) => {        
        this.listaProdutos=produtos;    
      }
    });
  }

  leWishlist(){
    this.whislistService.getWishlist().subscribe(productIds=>{
      console.log(productIds)
      this.wishlist= productIds 
    })
  }

  mostraProduto(id : number) {
    this.servprodutos.getProduto(id).subscribe(
      (produto : Produto) => {   
        console.log(produto);       
      }
    )
  }

  filtraLista(pesquisa : string) {

    this.servprodutos.filtraProduto(pesquisa).subscribe({
      next: (produtos : Produto[]) => {        
         this.listaProdutos=produtos;    
      }
    });
  }








}
