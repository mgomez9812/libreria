import { Component, OnInit } from '@angular/core';

declare var $;


@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  ingreso_caja: boolean;
  estado_txt_caja:boolean = false;

  constructor() { 
    this.ingreso_caja = false;

  }


  function_estado_caja(numero: string){
    let re = /^\d*(\.\d{1})?\d{0,1}$/;

    if((numero != '') && re.test(numero)){
      this.ingreso_caja = true;
      $(document).ready(function() {
        $('#vendedor_precios').DataTable( {
        } );
    } );

    }
    else{
      this.estado_txt_caja = true;
    }


  


}



  ngOnInit() {
  }

}
