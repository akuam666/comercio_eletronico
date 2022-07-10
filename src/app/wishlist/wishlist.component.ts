import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos/produto.model';
import { ServprodutosService } from '../produtos/servprodutos.service';
import { WhishlistService } from '../whishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

 

  // listaWishlist : Produto[] = [];
  listaProdutos : Produto[] = [];
  wishlist: any[] = [];

  

  constructor(private wishlistService : WhishlistService, private servprodutos: ServprodutosService  ) { }

  ngOnInit(): void {
    
    this.leProdutos();  
  }

 
  leProdutos() {
    this.wishlistService.getWishlist().subscribe(a=>{
      // console.log(productIds)
     this.wishlist= a
    }) 
    this.servprodutos.getProdutos().subscribe({
      next: (produtos : Produto[]) => {             
        this.listaProdutos=produtos;
        this.listaProdutos = this.listaProdutos.filter( i => this.wishlist.includes( i.id ) );
        console.log(this.listaProdutos);
        // console.log(this.listaProdutos);            
      }
    });
  }


  removeProdutoWishlist(id:number){
    console.log(`id a remover ${id}`)
    this.wishlistService.removeFromWhishlist(id).subscribe();
    //this.leProdutos();
}


  

  
 





}
