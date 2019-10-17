import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/Api/api.service';
import { Localidad } from 'src/app/Clases/localidad';
import { Departamento } from 'src/app/Clases/departamento';

@Component({
  selector: 'mp-localidad-nuevoeditar',
  templateUrl: './localidad-nuevoeditar.component.html',
  styleUrls: ['./localidad-nuevoeditar.component.css']
})
export class LocalidadNuevoeditarComponent implements OnInit {
  mostrarVM: boolean = false;
  esNuevo: boolean = false
  localidad: Localidad
  @Output() actualizarListado = new EventEmitter()
  listadoDepartamentos : Departamento[] = []

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this.traerDepartamentos()
    //this.nuevoLocalidad()
  }

  nuevoLocalidad(){
     this.localidad = new Localidad(null,'',null)
     this.esNuevo = true     
  }

  cancelar(){
    this.localidad = null
  }  
  traerDepartamentos(){
    this._api.getDepartamentos().subscribe(
    data => this.listadoDepartamentos = data
  )
  }
  editarDepartamentoDeLocaliadad(){
    this.localidad.departamento = null
  }
  getLocalidadAEditar(idlocalidad:number) { 
    this._api.getLocalidad(idlocalidad)
      .subscribe(
        (localidad) => {
          this.localidad = localidad
          this.esNuevo = false
          this.mostrarVM = true
        }
      )
  }
  guardarLocalidad(){
    if(this.esNuevo)
    {
      this._api.nuevoLocalidad(this.localidad)
        .subscribe(
          response => {
            this.actualizarListado.emit()
             this.localidad = null  }
        )
    }
    else{
      this._api.actualizarLocalidad(this.localidad)
        .subscribe(
          response => {
              this.actualizarListado.emit() 
              this.localidad = null  }
        )
    }
  }
}
