import { Component, OnInit } from '@angular/core';


declare var $;

@Component({
  selector: 'app-proventa',
  templateUrl: './proventa.component.html',
  styleUrls: ['./proventa.component.css']
})
export class ProventaComponent implements OnInit {

  constructor() {
    $(document).ready(function() {
      $('#example').DataTable( {
      } );
  } );


   }

  ngOnInit() {
  }

}
