import { Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { WhishlistService } from 'src/app/whishlist.service';
import { Produto } from '../produto.model';
import { ServprodutosService } from '../servprodutos.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  listaProdutos: Produto[] = [];

  // produto!: Produto;
  @Input() produto!: Produto

  @Input() addedToWishlist: boolean = false;
  
  wishlist : number[] = [];

  constructor(private servprodutos: ServprodutosService, private router: Router, private whislistService: WhishlistService) { }

  ngOnInit(): void {
    
  }


 

  addProdutoWhishlist(id:number) {
    this.whislistService.addToWhishlist(id).subscribe(() =>{
       this.addedToWishlist = true;
    })
  }

  removeProdutoWishlist(id:number){
    this.whislistService.removeFromWhishlist(id).subscribe(() =>{
       this.addedToWishlist = false;
    })
}


}
