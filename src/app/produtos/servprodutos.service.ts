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

 

  getProduto(id: number): Observable<Produto> {
    
    const url = `${this.urlAPI}/${id}`;

    return this.http.get<Produto>(url).pipe(
      tap(_ =>this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Produto>(`getProduto id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of (result as T);
    };
  }


  private log(message: string) {
     this.messageService.add(`HeroService: ${message}`);
   }
   

  filtraProduto(filtro: string) {
    return this.http.get<Produto[]>(`${this.urlAPI}?tipo_de_produto_like=${filtro}`);
  }


  

  postLivro(infoProduto : Produto) {
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
