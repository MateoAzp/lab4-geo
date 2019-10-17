import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/Api/api.service';
import { Departamento } from 'src/app/Clases/departamento';

@Component({
  selector: 'mp-departamento-lista',
  templateUrl: './departamento-lista.component.html',
  styleUrls: ['./departamento-lista.component.css']
})
export class DepartamentoListaComponent implements OnInit {

  muestroNuevoEditar : boolean = false;
  listadoDepartamentos : Departamento[] = []

  @Output() departamentoAEditar: EventEmitter<number> = new EventEmitter()
  @Output() nuevoDepartamento: EventEmitter<boolean> = new EventEmitter()
  
  constructor(private _api: ApiService) {
    this.traerDepartamentos()
   }
  traerDepartamentos(){
      this._api.getDepartamentos().subscribe(
      data => this.listadoDepartamentos = data 
    )
  }

  irNuevoDepartamento(){
    this.nuevoDepartamento.emit(true)
    this.muestroNuevoEditar = true;
  }
  editarDepartamento(iddepartamento:number){
    this.departamentoAEditar.emit(iddepartamento);
    this.muestroNuevoEditar = true;
  }

  borrarDepartamento(iddepartamento:number) {  
    this._api.eliminarDepartamento(iddepartamento)
      .subscribe( 
        (response) =>{ console.log('Se borro el departamento ', response) 
        this.traerDepartamentos()
        }
        
      )
  }

  ngOnInit() {
  }

}
