import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor() { 
        /*para marca*/ 
        $(document).ready(function() {
          $('#load_usuarios').DataTable( {
          } );
        } );
  }
/**variable to estado */
estado_recursos:boolean = false;



  /**funciones CRUD */
  
  /**function create */
  create_usuario(){

  }


  /**function update */
  update_usuario(){

  }

  /**function delete */
  delete_usario(){

  }


/**function load data */
  load_data_usuario(){

  }


  /**function load recursos  */

  load_data_sucursal(){
    
  }

  ngOnInit() {
  }

}
