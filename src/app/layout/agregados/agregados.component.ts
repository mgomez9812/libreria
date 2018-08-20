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
  /*from delete marca or categoria*/
  id_delete:number = 0;


  /**function CRUD from marca */
  create_marca(nombre:string, estado:string){
    /*llamar a insertar desde la api*/
    console.log('nombre '+ nombre+ ' estado '+estado); 

  }

  /**function update marca  */
  update_marca(nombre:string, estado:string){
    /*call metod update from api*/
      console.log('nombre '+ nombre + ' estado '+estado); 
  }
  /**function delete marca */
  delete_marca(){
    console.log('id_delete');
  }
  /**function read data marca */
  load_data_marca(){
    /**load data from API to Marca 
     * this function load on constructor
    */
  }


  /**function CRUD from Categoria */
  /**function to create  categoria */
  /**estado is type boolean */
  create_categoria(nombre:string, estado:string){
    console.log('nombre '+nombre +' estado '+ estado);
  }

  /**function to update categoria */
  update_categoria(nombre:string, estado:string){
    console.log('nombre '+ nombre + 'estado '+ estado);
  }

  /**function to delete categoria */
  delete_categoria(){
    console.log('funcion delete');
  }

  load_data_categoria(){
    /**this load from constructor */
  }

  ngOnInit() {
  }

}
