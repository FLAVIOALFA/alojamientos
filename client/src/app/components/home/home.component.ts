import { Component, OnInit } from '@angular/core';
import * as Pikaday from "pikaday";
import * as moment from "moment";

declare let $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  private titulo_fecha:string = "Seleccione un rango";
  private fecha_ida:string;
  private fecha_vuelta:string;
  private minDate:any;
  private maxDate:any;

  constructor() {
    let currentYear:any = new Date().getFullYear();
    let maxYear:any = currentYear + 2;
    this.minDate = new Date();
    this.maxDate = new Date(maxYear, 11, 31);
  }

  ngOnInit() {

    let self:any = this;
    let contador:number = 0;
    let fecha_setear:any;
    let calendario = new Pikaday({
      field: document.getElementById('datepicker'),
      firstDay: 1,
      minDate: self.minDate,
      maxDate: self.maxDate,
      yearRange: [2000,2020],
      onSelect: function(){

        contador++;
        fecha_setear = self.ponerDatos(calendario.toString(), contador);
        this.minDate = fecha_setear;

      }
    });

  }

  ponerDatos( fecha:string, posicion:number ) {
    let aux:string;
    let fecha_to_show= moment(fecha).locale("Es").format("dddd, D MMM");

    let fec: any[] = fecha.split("-");
    let anio:number = parseInt( fec[0] );
    let mes:number = parseInt( fec[1] );
    let dia:number = parseInt( fec[2] );

    aux = this.capitalizar(fecha_to_show);

    //Comprobamos que sea la fecha de ida
    if (!(posicion % 2 == 0)){
      //Si tiene un valor grabado ya..
      this.fecha_ida = fecha;
      this.titulo_fecha = aux + " - ";
      return new Date(anio, mes, dia);

      //Comprobamos que sea la fecha de vuelta
    }else{
      //Si tiene un valor grabado ya..
      this.fecha_vuelta = fecha;
      this.titulo_fecha = this.titulo_fecha + aux;
      return new Date();

    }

  }

  capitalizar( cadena:string ){
    let result:string = "";

    cadena = cadena.replace(".", "");
    let fechas:any[] = cadena.split(" ");
    console.log(cadena);
    for ( let fecha of fechas){
      if( ! parseInt(fecha) ){
        fecha = fecha.replace(fecha[0],fecha[0].toUpperCase());

      }
      result = result + " " + fecha;
    }

    return result;

  }


}
