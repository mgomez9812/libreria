import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-agregados',
  templateUrl: './agregados.component.html',
  styleUrls: ['./agregados.component.css']
})
export class AgregadosComponent implements OnInit {

  constructor() { 
    /*para marca*/ 
    $(document).ready(function() {
      $('#Marca').DataTable( {
      } );
    } );


    /*para categoria*/ 
    $(document).ready(function() {
      $('#Categoria').DataTable( {
      } );
    } );



  }

  ngOnInit() {
  }

}
