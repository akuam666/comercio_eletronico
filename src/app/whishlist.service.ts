import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Produto } from './produtos/produto.model';
import { Wishlist } from './wishlist.model';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

  private urlWish = "http://localhost:3000/wishlist"
  
 
  constructor(private http: HttpClient) { }


 

  getWishlist(){
    return this.http.get<any>(this.urlWish).pipe(
      map((result:any[]) => {
        let produtosIds:any[] = []
        result.forEach(item => produtosIds.push(item.id))
        
        return produtosIds
      })
    )
  }

  addToWhishlist(produtoId : number){
    return this.http.post<Produto>(this.urlWish, {id: produtoId});
  }

  removeFromWhishlist(id:number){
    return this.http.delete<Produto>(`${this.urlWish}/${id}`)
  }



}

