import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export declare type SidebarMenu = 'not_selected' | 'prodect' | 'category';

@Component({
  selector: 'scm-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // currentMenu: SidebarMenu;
  // @Output() changedMenu: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  // clickMenu(menu: SidebarMenu) {
  //   this.currentMenu = menu;
  //   this.changedMenu.emit(menu);
  // }

}
