import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import {  map, tap } from 'rxjs/operators';
import { MessageService } from '../message.service';
import { Produto } from './produto.model';



@Injectable({
  providedIn: 'root'
})
export class ServprodutosService {

   listaProdutos: Produto[]= [];

  private urlAPI="http://localhost:3000/produtos";

 

  constructor(private http: HttpClient, private messageService: MessageService) { }

  private processaErro(erro: HttpErrorResponse) {
    let mensagem="";
    if (erro.status===404) {
      mensagem="Página inexistente";
    } else {
      mensagem="Ocorreu um erro";
    }
    const err = new Error(mensagem);
    return throwError(() => err);
  }

  getProdutos() {
    return this.http.get<Produto[]>(this.urlAPI);
  }


  getDestaques(){
    return this.http.get<Produto[]>(`${this.urlAPI}/?destaque_like=true`);
  }

  getTipos(){
    return this.http.get<any>("http://localhost:3000/tipos")

  }

 

  getProduto(id: number): Observable<Produto> {
    
    const url = `${this.urlAPI}/${id}`;

    return this.http.get<Produto>(url)
   
  }



  

  filtraProduto(filtroTipo: string, filtroCor :string) {
    return this.http.get<Produto[]>(`${this.urlAPI}?tipo_de_produto_like=${filtroTipo}&cor_like=${filtroCor}`);
  }

  filtraRoupa(pesquisa : string){
    return this.http.get<Produto[]>(`${this.urlAPI}?q=${pesquisa}`);
  }


  

  postProduto(infoProduto : Produto) {
    // a REST API retorna o registo inserido juntamente com a chave (id)
    return this.http.post<Produto>(this.urlAPI, infoProduto);
  }

  deleteProduto(id: number) {
    // retorna um objecto vazio - {}
    return this.http.delete<Produto>(`${this.urlAPI}/${id}`)
    .pipe(
      catchError(this.processaErro)
    );
  }

  putProduto(id: number, infoProduto : Produto) {
    // a REST API retorna o registo inserido juntamente com a chave
    return this.http.put<Produto>(`${this.urlAPI}/${id}`, infoProduto);
  }






}
