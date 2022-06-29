import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ServprodutosService } from '../servprodutos.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  private listaProdutos!: Produto[];

  produto! : Produto;
  // id : number = 0;

  constructor(private servprodutos: ServprodutosService, private router: Router, private location: Location, private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.getProduto();
  }


  getProduto(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    console.log(id);
    // const id = Number(this.route.snapshot.paramMap.get('id')!, 1);
    this.servprodutos.getProduto(id)
      .subscribe(produto => this.produto = produto);
      
  }
  
  

  
  



}

