import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() {
    /*para marca*/ 
    $(document).ready(function() {
      $('#load_client').DataTable( {
      } );
    } );

   }

  ngOnInit() {
  }
/**variable for boolean data */
data_recived:boolean = false;

/**funcion para obtener todos actualizar */
function_add_data(){
  /**a la funcion se debe de agregar un id el cual sera dado en el button actualizar */
}


/**collection of function to CRUD clientes */

/**function Create new client */
create_client(Pnombre:string, Snombre:string, Papellido:string, Sapellido:string, Telefono:string, Direccion:string, Nit:string){
  /**call metod to API */

/** */
    if(Pnombre != '' && Snombre != '' && Papellido != '' && Sapellido != '' && Telefono !=  '' && Direccion != '' && Nit != ''){
      console.log("primer Nombre "+ Pnombre+
      " segungo nombre" + Snombre+
      " primer apellido "+ Papellido + 
      " segundo apelllido "+ Sapellido + 
      " telefono " + Telefono + 
      " direccion " + Direccion+
      " Nit " + Nit);
    }
    else{
      this.data_recived = true;
    }



}

/**function update cllient */
update_client(Pnombre:string, Snombre:string, Papellido:string, Sapellido:string, Telefono:string, Direccion:string, Nit:string){
  /**call metod to API */
  if(Pnombre != '' && Snombre != '' && Papellido != '' && Sapellido != '' && Telefono !=  '' && Direccion != '' && Nit != ''){
    console.log("primer Nombre "+ Pnombre+
    " segungo nombre" + Snombre+
    " primer apellido "+ Papellido + 
    " segundo apelllido "+ Sapellido + 
    " telefono " + Telefono + 
    " direccion " + Direccion+
    " Nit " + Nit);
  }
  else{
    this.data_recived = true;
  }
}

/**function delete client */
delete_client(){
  console.log('Delete client');
}
/**function load data client */
load_data_client(){

}
}
