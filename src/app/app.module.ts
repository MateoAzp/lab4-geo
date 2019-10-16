import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoListaComponent } from './Componentes/departamento-lista/departamento-lista.component';
import { DepartamentoNuevoeditarComponent } from './Componentes/departamento-nuevoeditar/departamento-nuevoeditar.component';
import { LocalidadListaComponent } from './Componentes/localidad-lista/localidad-lista.component';
import { LocalidadNuevoeditarComponent } from './Componentes/localidad-nuevoeditar/localidad-nuevoeditar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoListaComponent,
    DepartamentoNuevoeditarComponent,
    LocalidadListaComponent,
    LocalidadNuevoeditarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
