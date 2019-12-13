import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  appTitle="SCM"
  
  constructor() { }

  ngOnInit() {
  }

  searchProduct(no: number) {
    console.log('search: ${no}');
  }

}
