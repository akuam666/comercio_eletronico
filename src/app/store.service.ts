import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private urlUser="http://localhost:3000/signupsers";

   dadosUser! : User;

  constructor(private http: HttpClient) { 
  }

  getUser() {
    return this.dadosUser;
  }
  
  setUser(dadosUser:User){
    this.dadosUser = dadosUser;
   
  }

  editUser(id: number, infoUser : User) {
    // a REST API retorna o registo inserido juntamente com a chave
    return this.http.put<User>(`${this.urlUser}/${id}`, infoUser);
  }





}
