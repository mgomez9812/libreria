import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor() { }

}

export interface Proventa{
  codigo: number;
  nombre : Text;
  description: Text;
  existencia : number;
  precio: number;
  marca: number;
  categoria: number;
}
