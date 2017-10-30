import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private titulo_fecha:String;
  private bandera = false;

  constructor() {
      this.titulo_fecha = "Ingrese una fecha de viaje";
  }

  ngOnInit() {
    //Aca se hace algo cuando el componente arranca.

  }

  btnVamos(){

  }

}
