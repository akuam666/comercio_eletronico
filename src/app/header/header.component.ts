import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { StoreService } from '../store.service';
import { User } from '../user.model';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';






@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})

export class HeaderComponent implements OnInit {

  faClipboardList = faClipboardList;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faHammer=faHammer;
  faSignInAlt = faSignInAlt;

  constructor( private storeService: StoreService){}

  
  isLogged : boolean= this.storeService.isAuthenticated();
  dadosUser : User= this.storeService.getUser();

  ngOnInit(): void {

  }


  logOut(){
    this.storeService.setisNotLoggedIn();
  }

}
