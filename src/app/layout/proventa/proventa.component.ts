import { Component, OnInit } from '@angular/core';
import { Proventa } from '../../providers/proventa';
import { Prueba } from '../../providers/prueba';


@Component({
  selector: 'app-proventa',
  templateUrl: './proventa.component.html',
  styleUrls: ['./proventa.component.css']
})

export class ProventaComponent implements OnInit {
   iPrueba: Prueba;

  iProventa: Proventa[] = [];
  constructor() { }

  addProductoVenta() {
    // this.iProventa = [
    //   codigo: 1,
    //   nombre : 'Text',
    //   description: 'Text',
    //   existencia : 1,
    //   precio: 1,
    //   marca: 1,
    //   categoria: 1,
    // ]
    
    


    console.log(this.iPrueba);
  }


  ngOnInit() {
  }

}
