import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../produtos/produto.model';
import { ServprodutosService } from '../produtos/servprodutos.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  listaProdutos: Produto[] = [];
  formProdutos! : FormGroup;
  emInsercao : boolean = true;
  produtoAalterar! : Produto;
  listaTipos!:any[];

  constructor(private servprodutos: ServprodutosService, private store: StoreService) { }

  ngOnInit(): void {

    this.leProdutos();
    this.leTipos();
    
    this.formProdutos = new FormGroup({
       nome: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z -]{3,40}')]),
       marca: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z -]{3,40}')]),
       tipo_de_produto: new FormControl(''),
       cor: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z -]{3,20}')]),
       preco: new FormControl('',[Validators.required, Validators.pattern('[0-9]{2,5}')]),
       descricao: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z -.?!(),]{3,400}')]),
       destaque: new FormControl('',),
     });

  }

  
  leProdutos() {
    this.servprodutos.getProdutos().subscribe({
      next: (produtos : Produto[]) => {        
        this.listaProdutos=produtos;    
      }
    });
  }

  eliminaProduto(id : number, evento : any) {
    evento.stopPropagation();
    if (confirm("Confirma a eliminação do produto?")) {
      this.servprodutos.deleteProduto(id).subscribe({
        next: (info : any) => {
          console.log(info);
          alert(`Foi eliminado o livro com o id: ${id}`);
          this.leProdutos();
        },
        error: (error) => {
          console.log("Ocorreu um erro: "+error);
        }
      });
    }
  }


  idaAlterar(id:number, evento:any){
    evento.stopPropagation();
    this.emInsercao=false

   this.servprodutos.getProduto(id).subscribe(
    (produto : Produto) => {   
      console.log(produto);
      this.produtoAalterar= produto;       
      
          this.formProdutos.setValue({
            
            
            nome: this.produtoAalterar.nome,
            marca: this.produtoAalterar.marca,
            tipo_de_produto: this.produtoAalterar.tipo_de_produto,
            cor: this.produtoAalterar.cor,
            preco: this.produtoAalterar.preco,
            descricao: this.produtoAalterar.descricao,
            destaque: "true",
      
      
         })
    }
  )
   
  }


  alteraProduto( evento : any){

    evento.stopPropagation();
    let infoProduto : Produto = this.formProdutos.value;
    if (confirm("Confirma a alteração do produto?")) {
      this.servprodutos.putProduto(this.produtoAalterar.id!, infoProduto).subscribe({
        next: (info : any) => {
          console.log(info);
          alert(`Foi alterado o produto com o id: ${this.produtoAalterar.id}`);
          this.leProdutos();
          this.formProdutos.reset();
          this.emInsercao = true; 
        },
        error: (error) => {
          console.log("Ocorreu um erro: "+error);
        }
      });
    }
  }


  inserirProduto() {
 
    let produto : Produto = this.formProdutos.value;
    this.servprodutos.postProduto(produto).subscribe(
      (produto : Produto) => {
        console.log(produto);
        this.leProdutos();
        this.formProdutos.reset();
      }
    )
  }

  cancelarAlteracao() {
    this.formProdutos.reset();
    this.emInsercao=true;
  }

  leTipos(){
    this.servprodutos.getTipos().subscribe({
      next: (tipos : any) => {        
        this.listaTipos=tipos;    
      }
    });

  }

  processa_pesquisa(pesquisa : string){

    this.servprodutos.filtraRoupa(pesquisa).subscribe({
      next: (produtos : Produto[]) => {        
        this.listaProdutos=produtos;    
      }
    }
    )
  }

  limpa_pesquisa(){
    this.servprodutos.getProdutos().subscribe({
      next: (produtos : Produto[]) => {        
        this.listaProdutos=produtos;    
      }
    });

  }



}
