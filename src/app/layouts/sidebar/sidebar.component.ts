import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeComponent } from "../../pages/home/home.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [NavbarComponent, RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
