import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ********************* Rutas *********************
import { APP_ROUTING } from './app.routes';
//******************* Fin Rutas *********************

import { CalendarModule } from 'angular-calendar';

// ********************* Servicios *********************
import { AlojamientoService } from "./services/alojamiento.service";
// ******************* Fin Servicios *******************
// *********************** Componentes ***********************
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AlojamientoComponent } from './components/alojamiento/alojamiento.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
// ********************* Fin Componentes *********************
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    AlojamientoComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AlojamientoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
