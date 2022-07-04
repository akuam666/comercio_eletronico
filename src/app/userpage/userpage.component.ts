import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

import { StoreService } from '../store.service';
import { User } from '../user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})

export class UserpageComponent implements OnInit {

  userInfo!: User;
 

  // userId : any[] = [];

  signupForm! : FormGroup;


  constructor(private storeService: StoreService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {


    this.signupForm = this.formBuilder.group({
      nome:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      morada:['', Validators.required],
      codigo_postal:['', Validators.required],
      pais:['', Validators.required],
    });


    this.userInfo = this.storeService.getUser();
    console.log(this.userInfo);

     this.signupForm.setValue({

      nome: this.userInfo.nome,
      email: this.userInfo.email,
      password: this.userInfo.password,
      morada: this.userInfo.morada,
      codigo_postal: this.userInfo.codigo_postal,
      pais: this.userInfo.pais,


   })



  }

  alteraUser(){
    let user : User= this.signupForm.value;
    this.storeService.editUser(this.userInfo.id! , user).subscribe(
      (user: User) => {
        console.log(user);
        this.storeService.setUser(user);
        this.router.navigate([''])

      })



  }



}
