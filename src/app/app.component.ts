import { Component } from '@angular/core';
import { SidebarMenu } from './sidebar/sidebar.component';

@Component({
  selector: 'scm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'simple-commerce-manager';
  // currentMenu: SidebarMenu;
}
