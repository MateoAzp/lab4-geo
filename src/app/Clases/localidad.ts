import { Departamento } from './departamento'

export class Localidad {
  id:number
  nombre: string
  departamento: Departamento

  constructor(id:number, nombre:string, departamento: Departamento){
    this.id = id
    this.nombre = nombre
    this.departamento = departamento
  }
}