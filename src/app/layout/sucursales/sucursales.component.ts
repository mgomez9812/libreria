import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  constructor() { 

            /*para servicios*/ 
            $(document).ready(function() {
              $('#load_sucursales').DataTable( {
              } );
            } );

  }

  ngOnInit() {
  }

}
