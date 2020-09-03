import { Component, OnInit } from '@angular/core';
import * as $ from 'jQuery';
import * as M from 'materialize-css';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  
  }
  ngAfterViewInit(){
    $(document).ready(function() {
      var elem = document.querySelector('.sidenav');
      var instance = new M.Sidenav(elem);
    })
  }

}
