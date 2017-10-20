import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ********************* Rutas *********************
import { APP_ROUTING } from './app.routes';
//******************* Fin Rutas *********************

// ********************* Servicios *********************

// ******************* Fin Servicios *******************
// *********************** Componentes ***********************
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AlojamientoComponent } from './components/alojamiento/alojamiento.component';
import { HomeComponent } from './components/home/home.component';
// ********************* Fin Componentes *********************
@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    AlojamientoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
