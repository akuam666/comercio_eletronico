import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StoreService } from '../store.service';
import { User } from '../user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // private _isLoggedIn = new BehaviorSubject<boolean> (false);
  // isLoggedIn = this._isLoggedIn.asObservable();

  public loginForm! : FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router, private storeService: StoreService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['', Validators.required]
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/signupsers")
    .subscribe(res =>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email &&  a.passowrd === this.loginForm.value.passowrd
      });
      if(user){

        alert("Login efetuado com sucesso!");
     
        this.storeService.setUser(user);
        this.storeService.setisLoggedIn();
      
        this.loginForm.reset();
        this.router.navigate([''])
      }else {
        alert("Utilizador nao encontrado");

      }
     
    }
      
    )

  }

}
