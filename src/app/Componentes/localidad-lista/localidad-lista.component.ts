import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/Api/api.service';
import { Localidad } from 'src/app/Clases/localidad';

@Component({
  selector: 'mp-localidad-lista',
  templateUrl: './localidad-lista.component.html',
  styleUrls: ['./localidad-lista.component.css']
})
export class LocalidadListaComponent implements OnInit {

  muestroNuevoEditar : boolean = false;
  listadoLocalidades : Localidad[] = []

  @Output() localidadAEditar: EventEmitter<number> = new EventEmitter()
  @Output() nuevoLocalidad: EventEmitter<boolean> = new EventEmitter()
  
  constructor(private _api: ApiService) {
    this.traerLocalidades()
   }
  traerLocalidades(){
      this._api.getLocalidades().subscribe(
      data => this.listadoLocalidades = data
    )
  }

  irNuevoLocalidad(){
    this.nuevoLocalidad.emit(true)
    this.muestroNuevoEditar = true;
  }
  editarLocalidad(idlocalidad:number){
    this.localidadAEditar.emit(idlocalidad);
    this.muestroNuevoEditar = true;
  }

  borrarLocalidad(idlocalidad:number) {  
    this._api.eliminarLocalidad(idlocalidad)
      .subscribe( 
        (response) => this.traerLocalidades()        
      )
  }

  ngOnInit() {
  }
}
