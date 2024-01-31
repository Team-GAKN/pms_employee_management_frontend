import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent {
  @Input() navbarText: string = 'Navbar';
}
