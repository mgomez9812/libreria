import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    $('#exampleModal').on('shown.bs.modal', function () {
      $('#myInput').focus()
    })
   }

  ngOnInit() {
  }

}
