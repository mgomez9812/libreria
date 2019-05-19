import { Component, OnInit } from '@angular/core';
import { Proventa } from '../../providers/proventa';
import { Prueba } from '../../providers/prueba';



declare var $;

@Component({
  selector: 'app-proventa',
  templateUrl: './proventa.component.html',
  styleUrls: ['./proventa.component.css']
})

export class ProventaComponent implements OnInit {
   iPrueba: Prueba;

<<<<<<< HEAD
  iProventa: Proventa[] = [];
  constructor() { }
=======
  constructor() {
    $(document).ready(function() {
      $('#example').DataTable( {
      } );
  } );


   }
>>>>>>> 6465cf4104a7fe538a527b941c0d990635949225

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
