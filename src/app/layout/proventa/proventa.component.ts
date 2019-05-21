import { Component, OnInit } from '@angular/core';
import { Proventa } from '../../providers/proventa';
import { Prueba } from '../../providers/prueba';
import { NgForm } from '@angular/forms';




declare var $;

@Component({
  selector: 'app-proventa',
  templateUrl: './proventa.component.html',
  styleUrls: ['./proventa.component.css']
})

export class ProventaComponent implements OnInit {
   iPrueba: Array<Prueba>;
  iProventa: Array<Proventa>;

  constructor() { 
    
  }

  addProductoVenta(form: NgForm) {
    this.iProventa = form.value;
    console.log(this.iProventa);
  }


  ngOnInit() {
  }

}
