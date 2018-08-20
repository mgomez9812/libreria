import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {

  constructor() {
    /*para marca*/ 
    $(document).ready(function() {
      $('#load_representante').DataTable( {
      } );
    } );

    $(document).ready(function(){
      $('#load_proveedor').DataTable({});
    });
   }

   /** */
   
   /**function representante */
   /**function create */
   create_representante(){

   }

   /**function update */
   update_representante(){

   }

   /**function delete  */
   delete_representante(){

   }

   /**load data representante */
   load_data_representante(){

   }



   /**functions proveedor */
   /**function create */
   create_proveedor(){

   }

   /**function update */
   update_proveedor(){

   }

   /**function delete */
   delete_proveedor(){

   }

   /**load data proveedor */
   load_data_proveedor(){

   }



  ngOnInit() {
  }

}
