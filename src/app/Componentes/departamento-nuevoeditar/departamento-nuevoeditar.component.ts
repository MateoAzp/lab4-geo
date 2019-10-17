import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/Api/api.service';
import { Departamento } from 'src/app/Clases/departamento';

@Component({
  selector: 'mp-departamento-nuevoeditar',
  templateUrl: './departamento-nuevoeditar.component.html',
  styleUrls: ['./departamento-nuevoeditar.component.css']
})
export class DepartamentoNuevoeditarComponent implements OnInit {

  esNuevo: boolean = false
  departamento: Departamento
  @Output() actualizarListado = new EventEmitter()

  constructor(private _api: ApiService) { }

  ngOnInit() {
    //this.nuevoDepartamento()
  }

  nuevoDepartamento(){
     this.departamento = new Departamento(null,'')
     this.esNuevo = true     
  }

  cancelar(){
    this.departamento = null;    
  }  

  getDepartamentoAEditar(iddepartamento:number) {
    this._api.getDepartamento(iddepartamento)
      .subscribe(
        (departamento) => {
          this.departamento = departamento;
          this.esNuevo = false;
        }
      )
  }
  guardarDepartamento(){
    if(this.esNuevo)
    {
      this._api.nuevoDepartamento(this.departamento)
        .subscribe(
          response => {
            this.actualizarListado.emit()
             this.departamento = null;  }
        )
    }
    else{
      this._api.actualizarDepartamento(this.departamento)
        .subscribe(
          response => {
              this.actualizarListado.emit() 
              this.departamento = null;  }
        )
    }
  }


 }

