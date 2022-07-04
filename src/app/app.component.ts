import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comercio_eletronico';
  constructor(private storeService: StoreService){}
}
