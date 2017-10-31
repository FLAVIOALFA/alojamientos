import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private titulo_fecha:string;
  private value:string='';

  constructor() {
      this.titulo_fecha = "Ingrese una fecha para viajar";
  }

  ngOnInit() {

  }

  setInputDate(event) {
    this.value = event.target.value;
  }
  ponerDate(date){
    this.titulo_fecha = date;
  }

}
