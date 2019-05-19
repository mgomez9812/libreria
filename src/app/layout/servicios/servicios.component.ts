import { Component, OnInit } from '@angular/core';

declare var $;
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor() { 

        /*para servicios*/ 
        $(document).ready(function() {
          $('#load_servicios').DataTable( {
          } );
        } );

  }

  ngOnInit() {
  }

}
