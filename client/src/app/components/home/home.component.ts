import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AlojamientoService } from "../../services/alojamiento.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  //============ VARIABLES DEL COMPONENTE ============
  private titulo_fecha:string;
  private card:number = 0;
  private cards_cuenta:number = 0;
  private screenWidth:any;
  private tamanoVentana:number;
  private inicio:number = 1;
  private hasta:number = 1;
  private clicks:number = 0;
  private max_clicks:number = 0;
  private li_total:any;
  private tamano_ultima_card:number;

  //========== FIN VARIABLES DEL COMPONENTE ==========


  constructor( private _alojamientoService: AlojamientoService) {
      this.titulo_fecha = "Mar, 19 de nov - Jue, 26 de nov";
      //this.screenHeight = window.screen.height;
      this.screenWidth = window.screen.width;
  }

  ngOnInit() {
    //Aca se hace algo cuando el componente arranca.
    console.log("Siguiente: " + this.inicio);
    console.log("Prev: " + this.inicio);

    //=========== Contamos la cantidad de cards ============
    let carousel_ul = document.querySelector("#idUl");
    this.li_total = carousel_ul.getElementsByTagName('li');

    this.cards_cuenta = this.li_total.length;
    console.log("Cards Cuenta: " + this.li_total.length);
    //======================================================

    //======= DEFINO LA CANTIDAD DE ELEMENTOS A MOSTRAR EN EL SLIDE =======
    if ( this.tamanoVentana < 768){
      this.inicio = 1;
      this.hasta = 1;
      this.tamano_ultima_card = 140;
    }else{
      if( this.tamanoVentana > 800) {
        this.inicio = 3;
        this.hasta = 3;
        this.tamano_ultima_card = 200;
      }
    }
    //=====================================================================

    //Defino la cantidad maxima de clicks para hacer en el slide.
    this.max_clicks = this.cards_cuenta - this.hasta;
    console.log("Maximo clicks: " + this.max_clicks);
  }
  onResize(event){
    this.tamanoVentana = event.target.innerWidth;
    console.log(this.tamanoVentana);
  }


  slide(){
   let st = {
     "margin-left" : this.card + "px",
     "transition" : "0.6s"
   };
   return st;
  }
  sig(){

    if( this.max_clicks > this.clicks ){
      //Acá comprobar que sea el ultimo que pueda hacer
      if( ( this.max_clicks - this.clicks ) == 1 ){

        this.card = this.card - this.tamano_ultima_card;
        this.clicks = this.clicks + 1;
        console.log("Estamos en el ultimo del siguiente, click: " + this.clicks);
      }else{
        this.card = this.card - 330;
        this.clicks = this.clicks + 1;
        console.log("Siguiente, click: " + this.clicks);
      }
    }

  }
  prev(){

    if( this.max_clicks >= this.clicks && this.clicks > 0){
      //Acá comprobar que sea el ultimo click para hacer
      if( this.clicks == 1 ){
        //this.card = this.card + 200;
        this.card = this.card + parseInt(this.tamano_ultima_card);
        this.clicks = this.clicks - 1;
        console.log("Estamos en el ultimo del prev, click: " + this.clicks);
      }else{
        this.card = this.card + 330;
        this.clicks = this.clicks - 1;
        console.log("Prev, click: " + this.clicks);
      }
    }

  }

}
