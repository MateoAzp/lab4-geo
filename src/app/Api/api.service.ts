import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../Clases/departamento';
import { Observable } from 'rxjs';
import { Localidad } from '../Clases/localidad';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url: string = "http://localhost:3000/"
  constructor(private _httpClient: HttpClient) { }

  //Departamentos
  getDepartamentos() : Observable<Departamento[]>{
    const endpoint: string = this.url + "departamentos/"
    return this._httpClient.get<Departamento[]>(endpoint);
  }

  getDepartamento(id: number) : Observable<Departamento>{
    const endpoint: string = this.url + "departamentos/"
    return this._httpClient.get<Departamento>(endpoint + id);
  }

  nuevoDepartamento(departamentoNuevo: Departamento) {
   const endpoint: string = this.url + "departamentos/"
    return this._httpClient.post(endpoint, departamentoNuevo)
  }

  actualizarDepartamento(departamentoModificar: Departamento) {
       const endpoint: string = this.url + "departamentos/"+departamentoModificar.id
    return this._httpClient.put(endpoint, departamentoModificar)
  }
  
  eliminarDepartamento(iddepartamento:number) {
    const endpoint: string = this.url + "departamentos/"
    return this._httpClient.delete(endpoint + iddepartamento)
  }


  //Localidades
  getLocalidades() : Observable<Localidad[]>{
    const endpoint: string = this.url + "localidades/"
    return this._httpClient.get<Localidad[]>(endpoint);
  }

  getLocalidad(id: number) : Observable<Localidad>{
    const endpoint: string = this.url + "localidades/"
    return this._httpClient.get<Localidad>(endpoint + id);
  }

  nuevoLocalidad(localidadNuevo: Localidad) {
   const endpoint: string = this.url + "localidades/"
    return this._httpClient.post(endpoint, localidadNuevo)
  }

  actualizarLocalidad(localidadModificar: Localidad) {
       const endpoint: string = this.url + "localidades/" + localidadModificar.id
    return this._httpClient.put(endpoint, localidadModificar)
  }
  
  eliminarLocalidad(idlocalidad:number) {
    const endpoint: string = this.url + "localidades/"
    return this._httpClient.delete(endpoint + idlocalidad)
  }


}
