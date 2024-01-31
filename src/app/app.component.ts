import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterOutlet} from "@angular/router";
import {ButtonVariant} from "./app-button/buttonVariants";
import {AppNavbarComponent} from "./app-navbar/app-navbar.component";
import {AppButtonComponent} from "./app-button/app-button.component";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppNavbarComponent, AppButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lf10StarterNew';
  protected readonly ButtonVariant = ButtonVariant;

  constructor(public router: Router, private keycloakService: KeycloakService) {
  }

  get isOverviewPage(): boolean {
    return this.router.url === '/overview';
  }

  logOut() {
    this.keycloakService.logout().then(() => this.keycloakService.clearToken());
  }
}
