import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { delay, filter, map } from 'rxjs/operators';

import { Produto } from './produtos/produto.model';
import { StoreService } from './store.service';
import { User } from './user.model';
import { Wishlist } from './wishlist.model';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

    id :number= 3;

  // private urlWish = "http://localhost:3000/signupsers/4/wishlist"
  private ola = "http://localhost:3000/wishlist"

  isRemove = 0
  
 
  constructor(private http: HttpClient, private storeService: StoreService) { }

loggedUser : User = this.storeService.getUser();
 

  getWishlist(){
    return this.http.get<any>(`${this.ola}?signupsersId=${this.loggedUser.id}`).pipe(
      map((result:any[]) => {
        let produtosIds:any[] = []
        result.forEach(item => produtosIds.push(item.produtosId))
        console.log(`ids das roupas para este user ${produtosIds}`)
        return produtosIds
      })
    )
  }

  addToWhishlist(produtoId : number){
    return this.http.post<Produto>(this.ola, {produtosId: produtoId, signupsersId: this.loggedUser.id});
  }

  getIdRemove(id:number){
     this.http.get<any>(`${this.ola}?signupsersId=3`).pipe(
      map((result:any[]) => {
        result.forEach(item => {
          if(item.produtosId == id) {
            console.log("item.id" ,item.id)
            this.isRemove = item.id
            console.log("isRemove", this.isRemove)
            return item.id
            
          }
        })
      }) 
    )
  }



    removeFromWhishlist(id : number){
      console.log(`id a remover ${id}`)
     return this.http.delete<Wishlist>(`${this.ola}?produtosId=${id}&signupsersId=${this.loggedUser.id}`)
  
  }



}

