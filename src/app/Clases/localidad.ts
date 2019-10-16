export class Localidad {
  id:number
  nombre: string
  idprovincia: number

  constructor(id:number,nombre:string,idprovincia:number){
    this.id = id
    this.nombre = nombre
    this.idprovincia = idprovincia
  }
}