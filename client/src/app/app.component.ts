import { Component, OnInit } from '@angular/core';
import { AuthService } from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   private title:String = 'Reserva de alojamientos';

   constructor( private auth:AuthService ){
     auth.handleAuthentication();
   }

   ngOnInit(){

   }

   login(e){
     //e.preventDefault();
     this.auth.login();
   }

   salir(e){
     //e.preventDefault();
     this.auth.logout();
   }

}
