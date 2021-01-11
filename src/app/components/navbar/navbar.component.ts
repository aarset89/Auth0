import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
// import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(public auth: AuthService) { }


}
