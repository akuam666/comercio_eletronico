import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';

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


    


    this.signupForm = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]{3,40}')]),
      email:new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9]{5,40}')]),
      morada:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 -]{10,100}')]),
      codigo_postal:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9 -]{3,40}')]),
      pais:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z -]{3,40}')]),
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
