import { Component, OnInit } from '@angular/core';

declare var $;
@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  constructor() {

    /*para marca*/ 
    $(document).ready(function() {
      $('#load_ventas').DataTable( {
      } );
    } );

   }

  ngOnInit() {
  }

}
