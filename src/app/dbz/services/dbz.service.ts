import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

  private _listadoPersonajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15500
    },
    {
      nombre: 'Vegeta',
      poder: 8600
    }
  ];

  get listadoPersonajes() : Personaje[] {
    return [...this._listadoPersonajes];
  }

  constructor(){}

  agregarPersonaje( personaje: Personaje) {
      this._listadoPersonajes.push(personaje);
  }

}
